---
layout: post
title: "TypeScript Utility Types I Wish I'd Learned Earlier"
date: 2025-08-19
excerpt: "Partial, Pick, Omit — sure. But what about Awaited, Parameters, and the lesser-known gems that will change how you model your domain?"
categories:
  - engineering
  - web
---

TypeScript ships with more than 20 built-in utility types. Most tutorials stop at the obvious four. Here are the ones worth knowing earlier.

## Beyond the basics

Everyone knows `Partial<T>`, `Required<T>`, `Pick<T, K>`, and `Omit<T, K>`. They're useful and well-documented. But the library goes deeper.

```typescript
// Awaited — unwrap a Promise (or nested Promises)
type Data = Awaited<Promise<Promise<string>>>;

// Parameters — extract a function's argument types as a tuple
type Args = Parameters<typeof fetch>;

// ReturnType — you probably know this one, but use it more
type Json = ReturnType<typeof JSON.parse>;
```

## The ones that changed how I think

`Awaited` is deceptively powerful for async code. `Parameters` is great for wrapper functions that need to pass arguments through without re-typing them.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

## Composing them

The real power comes from combining utility types:

```typescript
type ApiResponse<T> = {
  data: T;
  status: number;
  ok: boolean;
};

// Extract just the data type from any ApiResponse
type ResponseData<R> = R extends ApiResponse<infer T> ? T : never;
```

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
