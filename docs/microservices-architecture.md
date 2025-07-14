---
sidebar_position: 5
---

# Microservices Architecture

Patterns for decomposing monolithic applications into independent, loosely coupled services. These 5 patterns are essential for successful microservices adoption.

## Pattern List

| # | Pattern | Description |
|---|---------|-------------|
| 1 | [Strangler Fig Pattern](#strangler-fig-pattern) | Gradually replace legacy systems |
| 2 | [Ambassador Pattern](#ambassador-pattern) | Proxy for external service communication |
| 3 | [Sidecar Pattern](#sidecar-pattern) | Extend service capabilities without modification |
| 4 | [Anti-corruption Layer](#anti-corruption-layer) | Isolate domain models from external systems |
| 5 | [Backends for Frontends](#backends-for-frontends) | Tailored backends for different clients |

## Key Patterns

### Strangler Fig Pattern
**Intent**: Gradually replace a legacy system by incrementally migrating functionality to new services.

**When to Use**:
- Large legacy monolith migration
- Risk reduction during modernization
- Need to maintain business continuity

**Implementation Strategy**:
1. Identify bounded contexts
2. Build new services alongside legacy
3. Route traffic incrementally
4. Decommission legacy components

### Sidecar Pattern
**Intent**: Deploy helper components alongside main services to provide additional capabilities.

**Common Use Cases**:
- Service mesh proxies (Envoy, Istio)
- Logging and monitoring agents
- Security policy enforcement
- Configuration management

**Benefits**:
- Language-agnostic functionality
- Independent deployment
- Separation of concerns

---

## Implementation Guidelines

### Service Decomposition
- Start with database-per-service
- Identify clear bounded contexts
- Minimize inter-service communication
- Design for failure

### Best Practices
- API versioning strategy
- Distributed tracing
- Service discovery
- Circuit breakers between services

---

## Related Patterns
- See [Messaging Systems](./messaging-systems.md) for service communication
- See [API Gateway](./api-gateway.md) for entry point patterns 