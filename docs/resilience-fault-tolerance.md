---
sidebar_position: 3
---

# Resilience & Fault Tolerance

Patterns for building systems that gracefully handle failures and maintain service quality under adverse conditions. These 9 patterns are crucial for creating robust distributed systems.

## Pattern List

| # | Pattern | Description |
|---|---------|-------------|
| 1 | [Circuit Breaker](#circuit-breaker) | Prevent cascading failures by monitoring service health |
| 2 | [Retry Pattern](#retry-pattern) | Automatically retry failed operations with backoff |
| 3 | [Bulkhead Pattern](#bulkhead-pattern) | Isolate critical resources to prevent total system failure |
| 4 | [Timeout Pattern](#timeout-pattern) | Prevent indefinite waiting with configurable timeouts |
| 5 | [Fallback Pattern](#fallback-pattern) | Provide alternative responses when primary service fails |
| 6 | [Throttling](#throttling) | Control resource consumption to prevent overload |
| 7 | [Rate Limiting](#rate-limiting) | Limit request frequency to protect system capacity |
| 8 | [Load Balancing](#load-balancing) | Distribute requests across multiple service instances |
| 9 | [Auto-scaling](#auto-scaling) | Dynamically adjust resources based on demand |

## Key Patterns

### Circuit Breaker
**Intent**: Prevent cascading failures by monitoring the health of external services and temporarily blocking requests when failures exceed a threshold.

**States**:
- **Closed**: Normal operation, requests pass through
- **Open**: Failures exceeded threshold, requests immediately fail
- **Half-Open**: Testing if service has recovered

**When to Use**:
- Calling external services or dependencies
- Want to fail fast instead of waiting for timeouts
- Need to prevent resource exhaustion from repeated failures

**Implementation**:
```javascript
class CircuitBreaker {
  constructor(threshold = 5, timeout = 60000) {
    this.threshold = threshold;
    this.timeout = timeout;
    this.failureCount = 0;
    this.state = 'CLOSED';
    this.nextAttempt = Date.now();
  }
  
  async call(operation) {
    if (this.state === 'OPEN') {
      if (Date.now() < this.nextAttempt) {
        throw new Error('Circuit breaker is OPEN');
      }
      this.state = 'HALF_OPEN';
    }
    
    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  onSuccess() {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }
  
  onFailure() {
    this.failureCount++;
    if (this.failureCount >= this.threshold) {
      this.state = 'OPEN';
      this.nextAttempt = Date.now() + this.timeout;
    }
  }
}
```

### Retry Pattern
**Intent**: Automatically retry failed operations with configurable backoff strategies to handle transient failures.

**Strategies**:
- **Fixed Delay**: Wait same time between retries
- **Exponential Backoff**: Increase delay exponentially
- **Jittered Backoff**: Add randomness to prevent thundering herd

**When to Use**:
- Transient network failures
- Temporary service unavailability
- Resource contention scenarios

### Bulkhead Pattern
**Intent**: Isolate critical resources to prevent failure in one component from affecting others.

**Types**:
- **Thread Pool Isolation**: Separate thread pools for different operations
- **Connection Pool Isolation**: Dedicated connections for critical operations  
- **Resource Partitioning**: CPU, memory, or storage isolation

**When to Use**:
- Multi-tenant systems
- Critical vs non-critical operations
- Different SLA requirements

### Load Balancing
**Intent**: Distribute incoming requests across multiple service instances to improve performance and availability.

**Algorithms**:
- **Round Robin**: Distribute requests sequentially
- **Weighted Round Robin**: Assign weights based on capacity
- **Least Connections**: Route to instance with fewest active connections
- **IP Hash**: Use client IP to determine routing
- **Geographic**: Route based on client location

---

## Pattern Combinations

### Defensive Architecture Stack
```
Request → Rate Limiter → Load Balancer → Circuit Breaker → Retry → Service
```

### Resilience Layers
1. **Client-side**: Circuit Breaker + Retry + Timeout
2. **Gateway**: Rate Limiting + Load Balancing
3. **Service**: Bulkhead + Auto-scaling
4. **Infrastructure**: Redundancy + Monitoring

---

## Implementation Guidelines

### Best Practices
- **Fail Fast**: Don't let failures cascade through the system
- **Gradual Degradation**: Reduce functionality rather than complete failure
- **Monitor Everything**: Track failure rates, response times, and resource usage
- **Test Failure Scenarios**: Use chaos engineering to validate resilience

### Common Mistakes
- Not setting appropriate timeout values
- Retrying non-idempotent operations
- Circuit breaker thresholds too high or too low
- Not considering downstream impact of retries

### Metrics to Track
- **Error Rate**: Percentage of failed requests
- **Response Time**: P50, P95, P99 latencies
- **Throughput**: Requests per second
- **Circuit Breaker State**: Open/closed transitions
- **Retry Attempts**: Success rate of retries

---

## Related Patterns
- See [Performance & Scalability](./performance-scalability.md) for optimization patterns
- See [Observability & Monitoring](./observability-monitoring.md) for visibility patterns
- See [Reliability & Resilience](./reliability-resilience.md) for advanced resilience patterns 