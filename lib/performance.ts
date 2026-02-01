// Performance monitoring utilities for Next.js application

export interface PerformanceMetrics {
  FCP: number | null // First Contentful Paint
  LCP: number | null // Largest Contentful Paint
  FID: number | null // First Input Delay
  CLS: number | null // Cumulative Layout Shift
  TTFB: number | null // Time to First Byte
}

// Performance observer for Core Web Vitals
export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    FCP: null,
    LCP: null,
    FID: null,
    CLS: null,
    TTFB: null,
  }

  private observers: PerformanceObserver[] = []

  constructor() {
    if (typeof window !== 'undefined') {
      this.initObservers()
    }
  }

  private initObservers() {
    // First Contentful Paint
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as PerformanceEntry
        this.metrics.FCP = lastEntry.startTime
        if (this.metrics.FCP !== null) {
          this.reportMetric('FCP', this.metrics.FCP)
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })
      this.observers.push(fcpObserver)
    } catch (e) {
      console.warn('FCP observation not supported')
    }

    // Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as any
        this.metrics.LCP = lastEntry.startTime
        if (this.metrics.LCP !== null) {
          this.reportMetric('LCP', this.metrics.LCP)
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(lcpObserver)
    } catch (e) {
      console.warn('LCP observation not supported')
    }

    // First Input Delay
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          this.metrics.FID = entry.processingStart - entry.startTime
          this.reportMetric('FID', this.metrics.FID)
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })
      this.observers.push(fidObserver)
    } catch (e) {
      console.warn('FID observation not supported')
    }

    // Cumulative Layout Shift
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        this.metrics.CLS = clsValue
        this.reportMetric('CLS', this.metrics.CLS)
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(clsObserver)
    } catch (e) {
      console.warn('CLS observation not supported')
    }

    // Time to First Byte (from navigation timing)
    try {
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (entry.entryType === 'navigation') {
            this.metrics.TTFB = entry.responseStart - entry.requestStart
            this.reportMetric('TTFB', this.metrics.TTFB)
          }
        })
      })
      navigationObserver.observe({ entryTypes: ['navigation'] })
      this.observers.push(navigationObserver)
    } catch (e) {
      console.warn('Navigation timing observation not supported')
    }
  }

  private reportMetric(name: string, value: number) {
    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: name,
        value: Math.round(value),
        custom_map: { metric_value: value },
      })
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Web Vital ${name}:`, value)
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  public destroy() {
    this.observers.forEach((observer) => observer.disconnect())
    this.observers = []
  }
}

// Utility function to measure function execution time
export function measureExecutionTime<T>(
  fn: () => T,
  label: string = 'Function execution'
): T {
  const start = performance.now()
  const result = fn()
  const end = performance.now()

  const duration = end - start
  console.log(`${label} took ${duration.toFixed(2)}ms`)

  return result
}

// Hook for React components to track render performance
export function useRenderPerformance(componentName: string) {
  if (typeof window === 'undefined') return

  const startTime = performance.now()

  return () => {
    const endTime = performance.now()
    const renderTime = endTime - startTime

    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`)
    }

    // Report slow renders (>16ms for 60fps)
    if (renderTime > 16) {
      console.warn(`Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`)
    }
  }
}

// Bundle size monitoring
export function logBundleSize() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Log resource sizes
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]

    resources.forEach((resource) => {
      if (resource.name.includes('.js') && resource.transferSize) {
        console.log(`Bundle: ${resource.name.split('/').pop()} - ${resource.transferSize} bytes`)
      }
    })
  }
}

// Memory usage monitoring
export function getMemoryUsage() {
  if (typeof window !== 'undefined' && 'memory' in (performance as any)) {
    const memory = (performance as any).memory
    return {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      limit: memory.jsHeapSizeLimit,
    }
  }
  return null
}

// Network information
export function getNetworkInfo() {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const connection = (navigator as any).connection
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
    }
  }
  return null
}
