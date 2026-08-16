export interface Post {
  id: string;
  slug: string;
  title: string;
  category: string;      // matches Category.slug
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;       // full body
  tags: string[];
  featured?: boolean;
}

const builtInPosts: Post[] = [
  {
    id: "1",
    slug: "rust-vs-go-2025",
    title: "Rust vs Go in 2025: A Systems Showdown",
    category: "programming",
    author: "Anonymous",
    date: "Aug 14, 2025",
    readTime: "8 min read",
    excerpt:
      "Two titans of systems programming go head-to-head. We compare performance, memory safety, ecosystem maturity, and developer experience.",
    content: `Rust and Go have dominated the systems programming conversation for years, but 2025 has brought both languages to new heights. Let's break down where each one excels.

Memory Safety & Ownership

Rust's borrow checker remains its defining feature. At compile time, Rust guarantees freedom from data races, null pointer dereferences, and use-after-free bugs. Go takes a different approach — its garbage collector handles memory automatically, trading some latency for simplicity.

In benchmarks, Rust consistently edges out Go in raw throughput. A recent TechEmpower round showed Rust frameworks (Actix, Axum) handling 15–20% more requests per second than Go's fastest (Fiber, Gin). But Go's compilation speed is lightning-fast — full builds complete in seconds where Rust projects can take minutes.

Concurrency

Go's goroutines and channels make concurrent programming almost trivial. Spawning thousands of lightweight goroutines is idiomatic and cheap. Rust's async/await ecosystem (powered by Tokio) offers more fine-grained control but requires understanding pinning, lifetimes, and executor runtimes.

The Verdict

Choose Rust when you need maximum performance, zero-cost abstractions, and compile-time safety guarantees. Choose Go when you want fast iteration, simple deployment, and excellent concurrency for microservices. Both languages thrive in modern systems.`,
    tags: ["rust", "go", "systems", "performance", "benchmarks"],
    featured: true,
  },
  {
    id: "2",
    slug: "neural-network-from-scratch-python",
    title: "Building a Neural Network from Scratch in Python",
    category: "ai-ml",
    author: "Anonymous",
    date: "Aug 12, 2025",
    readTime: "12 min read",
    excerpt:
      "Forget TensorFlow for a moment. Let's build a neural network using nothing but NumPy to truly understand backpropagation and gradient descent.",
    content: `Every ML engineer should build a neural network from scratch at least once. It transforms abstract math into intuitive understanding. Let's do exactly that.

The Architecture

We'll build a 3-layer network: an input layer (784 neurons for MNIST digits), one hidden layer (128 neurons with ReLU activation), and an output layer (10 neurons with softmax). No frameworks — just NumPy matrix operations.

Forward Pass & Backpropagation

The forward pass computes Z = W·X + b, followed by ReLU max(0, Z). The softmax output converts raw logits into probabilities.

Backpropagation applies the calculus chain rule: dZ = A - Y (predicted minus actual). We compute parameter gradients dW = (1/m) · dZ · A_prev^T and update weights W = W - learning_rate * dW.

After 100 epochs on MNIST, our scratch-built network achieves ~97% accuracy — proving how lightweight mathematics underpins all modern AI models.`,
    tags: ["python", "machine-learning", "numpy", "ai", "deep-learning"],
  },
  {
    id: "3",
    slug: "dark-side-of-npm",
    title: "The Dark Side of npm: Supply Chain Attacks Explained",
    category: "cybersecurity",
    author: "Anonymous",
    date: "Aug 10, 2025",
    readTime: "7 min read",
    excerpt:
      "Your node_modules folder could be hiding malicious code. Learn about dependency confusion, typosquatting, and protecting your JS supply chain.",
    content: `The average Node.js project pulls in over 1,000 transitive dependencies. Each one is a potential attack vector. Here's what you need to know.

Typosquatting & Dependency Confusion

Attackers publish packages with names almost identical to popular libraries ("loadsh" vs "lodash"). One mistyped command can execute arbitrary binary code on your build server.

In dependency confusion attacks, public npm repositories host packages with identical names to internal corporate modules but higher version numbers, fooling default package managers into pulling untrusted public code.

Defense Strategies

Lock dependencies strictly with package-lock.json and use npm ci in build pipelines. Enable automated vulnerability scans with Socket.dev or Snyk. Consider isolated runtimes like Bun or Deno that restrict unauthenticated file system access by default.`,
    tags: ["npm", "security", "supply-chain", "javascript", "cybersecurity"],
  },
  {
    id: "4",
    slug: "docker-to-kubernetes-migration",
    title: "Docker Compose to Kubernetes: A Migration Guide",
    category: "cloud-devops",
    author: "Anonymous",
    date: "Aug 8, 2025",
    readTime: "10 min read",
    excerpt:
      "Your Docker Compose setup works great locally. Now it's time to scale. Here's a practical guide to migrating your multi-container app to Kubernetes.",
    content: `Docker Compose is perfect for local development. But when you need auto-scaling, rolling updates, and self-healing infrastructure, Kubernetes is the industry standard.

Mapping Concepts

Docker Compose concepts map cleanly to Kubernetes resources:
- Compose Service → Kubernetes Deployment + Service
- Compose Volumes → PersistentVolumeClaims
- Environment Variables → ConfigMaps & Secrets

Step-by-Step Migration

1. Multi-stage Dockerfiles: Ensure final production images are lightweight (under 100MB) using Alpine or Distroless bases.
2. Declarative Deployments: Define replicas, resource requests, and liveness/readiness health probes.
3. Ingress Controllers: Use NGINX or Traefik for TLS termination and path routing.
4. Secret Management: Inject environment secrets securely via Vault or Kubernetes Secret objects.`,
    tags: ["docker", "kubernetes", "devops", "cloud", "containers"],
  },
  {
    id: "5",
    slug: "webgpu-end-of-webgl",
    title: "WebGPU is Here — The End of WebGL?",
    category: "web-dev",
    author: "Anonymous",
    date: "Aug 6, 2025",
    readTime: "9 min read",
    excerpt:
      "WebGPU brings modern GPU programming to the browser. With compute shaders and a Vulkan-inspired API, is WebGL finally obsolete?",
    content: `WebGPU has shipped across all major browsers, marking a generational leap over WebGL.

Compute Shaders Change Everything

WebGL could only render vertex and fragment shaders. WebGPU introduces general compute shaders, allowing developers to execute massively parallel algorithms — matrix multiplications, ML inference, and physics simulations — directly on the GPU inside the browser.

Libraries like ONNX Runtime Web and TensorFlow.js report 5–10x speed improvements when switching to WebGPU backends. Combined with WGSL (WebGPU Shading Language), web applications now match native desktop performance.`,
    tags: ["webgpu", "webgl", "browser", "gpu", "web-dev"],
  },
  {
    id: "6",
    slug: "contributing-to-linux-kernel",
    title: "Contributing to the Linux Kernel: A Beginner's Path",
    category: "open-source",
    author: "Anonymous",
    date: "Aug 4, 2025",
    readTime: "11 min read",
    excerpt:
      "The Linux kernel seems intimidating, but contributing is more accessible than you think. Here's a practical roadmap to making your first kernel patch.",
    content: `Over 20,000 developers have contributed to the Linux kernel. Here is how you can submit your first patch.

Start with the Staging Tree

The drivers/staging/ directory contains hardware drivers undergoing refinement. Running checkpatch.pl scripts to fix code formatting, memory leak checks, or static analysis warnings here is the classic entryway for newcomers.

Email Workflow

The kernel doesn't use GitHub pull requests. Instead, patches are formatted via git format-patch and submitted to subsystem mailing lists using git send-email. Adhering strictly to kernel C coding standards is essential for review acceptance.`,
    tags: ["linux", "kernel", "open-source", "c-programming", "git"],
  },
  {
    id: "7",
    slug: "nextjs-server-components-deep-dive",
    title: "Next.js Server Components: The Complete Deep Dive",
    category: "web-dev",
    author: "Anonymous",
    date: "Aug 2, 2025",
    readTime: "10 min read",
    excerpt:
      "React Server Components in Next.js fundamentally change how we build web apps. Understand the architecture, streaming, and caching.",
    content: `React Server Components (RSC) execute exclusively on the server, generating HTML and streaming serialized RSC payloads directly to the browser.

Key Architectural Advantages

- Zero Client-side JS Bundle Impact: Heavy libraries like syntax highlighters or markdown parsers stay on the server.
- Direct Data Access: Query databases or file systems inside async component functions without writing API endpoints.
- Progressive Streaming: Wrap async components in React Suspense boundaries to stream fast parts instantly while waiting for slow database fetches.`,
    tags: ["nextjs", "react", "server-components", "web-dev", "ssr"],
  },
  {
    id: "8",
    slug: "cli-tools-typescript-bun",
    title: "Building CLI Tools with TypeScript and Bun",
    category: "tutorials",
    author: "Anonymous",
    date: "Jul 30, 2025",
    readTime: "8 min read",
    excerpt:
      "Bun's speed and native TypeScript support make it perfect for CLI tools. Learn to build and distribute a single standalone binary.",
    content: `Bun starts up 4x faster than Node.js and executes TypeScript files natively without compilation steps.

Building Standalone Binaries

With bun build --compile src/index.ts --outfile my-cli, Bun compiles your TypeScript code and runtime into a zero-dependency executable binary that runs on machines without Node or Bun installed. Combine with Commander.js and Chalk for professional terminal interfaces.`,
    tags: ["typescript", "bun", "cli", "tutorial", "tools"],
  },
  {
    id: "9",
    slug: "how-llms-actually-work",
    title: "How LLMs Actually Work: Transformers Explained",
    category: "ai-ml",
    author: "Anonymous",
    date: "Jul 28, 2025",
    readTime: "13 min read",
    excerpt:
      "Behind ChatGPT and Claude lies the Transformer architecture. Understand self-attention, multi-head mechanisms, and token embeddings.",
    content: `Transformers convert text into high-dimensional vector representations.

Self-Attention Mechanism

Self-attention computes Query (Q), Key (K), and Value (V) projections for every token. Matrix dot-products softmax(Q · K^T / √d) determine how much context every word borrows from surrounding tokens. Multi-head attention repeats this across 32–128 parallel attention spaces.`,
    tags: ["llm", "transformers", "ai", "machine-learning", "deep-learning"],
    featured: true,
  },
  {
    id: "10",
    slug: "zero-trust-architecture",
    title: "Zero-Trust Architecture: Beyond the Firewall",
    category: "cybersecurity",
    author: "Anonymous",
    date: "Jul 25, 2025",
    readTime: "7 min read",
    excerpt:
      "The perimeter is dead. Zero-trust assumes every request is hostile until proven otherwise. Learn how modern teams enforce continuous authorization.",
    content: `Traditional network security trusted internal corporate networks. Zero-trust replaces location-based trust with explicit identity verification.

Key Building Blocks

1. Identity Verification: Hardware-backed MFA (FIDO2 keys) on every request.
2. Microsegmentation: Isolate services so a compromised server cannot access neighboring databases.
3. Ephemeral Credentials: Short-lived tokens issued via HashiCorp Vault that expire automatically.`,
    tags: ["zero-trust", "security", "cybersecurity", "networking", "cloud"],
  },
  {
    id: "11",
    slug: "postgresql-vs-mongodb",
    title: "PostgreSQL vs MongoDB: Choosing Your Database in 2025",
    category: "cloud-devops",
    author: "Anonymous",
    date: "Jul 22, 2025",
    readTime: "9 min read",
    excerpt:
      "PostgreSQL now handles JSON natively, and MongoDB supports multi-document transactions. Here's a practical comparison for modern applications.",
    content: `The SQL vs NoSQL distinction is blurred. PostgreSQL's JSONB indexing supports schema-less document storage alongside ACID relational transactions. Meanwhile, MongoDB Atlas offers vector search and distributed sharding. Choose Postgres for relational integrity and vector search; choose MongoDB for rapidly evolving dynamic schemas.`,
    tags: ["postgresql", "mongodb", "database", "sql", "devops"],
  },
  {
    id: "12",
    slug: "wasm-beyond-the-browser",
    title: "WASM Beyond the Browser: Server-Side WebAssembly",
    category: "mobile-edge",
    author: "Anonymous",
    date: "Jul 18, 2025",
    readTime: "8 min read",
    excerpt:
      "WebAssembly isn't just for browsers anymore. WASI brings Wasm binaries to servers, edge functions, and lightweight plugin runtimes.",
    content: `WASI (WebAssembly System Interface) grants Wasm sandboxed operating system access. Server-side Wasm runtimes like Wasmtime and WasmEdge boot in microseconds and consume under 10MB memory, enabling instant serverless edge functions on platforms like Cloudflare Workers and Fastly.`,
    tags: ["wasm", "edge", "rust", "serverless", "webassembly"],
  },
  {
    id: "13",
    slug: "vector-databases-ai-search",
    title: "Vector Databases 101: HNSW Indexes & RAG Pipelines",
    category: "data-analytics",
    author: "Anonymous",
    date: "Jul 16, 2025",
    readTime: "10 min read",
    excerpt:
      "How vector search powers retrieval-augmented generation (RAG). Learn about high-dimensional distance metrics and HNSW graph indexing.",
    content: `LLMs store knowledge in high-dimensional vector space. Vector databases (Pinecone, Qdrant, pgvector) index these embeddings using Hierarchical Navigable Small World (HNSW) graphs to perform approximate nearest-neighbor (ANN) searches in milliseconds.`,
    tags: ["vector-db", "ai", "rag", "embeddings", "analytics"],
  },
  {
    id: "14",
    slug: "terminal-mastery-tmux-neovim",
    title: "Terminal Power User: Tmux, Zsh & Neovim Workflow",
    category: "dev-environment",
    author: "Anonymous",
    date: "Jul 14, 2025",
    readTime: "9 min read",
    excerpt:
      "Supercharge your developer productivity without touching the mouse. A complete guide to modal editing, pane multiplexing, and dotfile automation.",
    content: `A keyboard-driven workflow eliminates context switching. Combining Tmux for session persistence, Neovim (with Lua & LSP) for code navigation, and Zsh aliases creates an lightning-fast development setup that runs over SSH anywhere.`,
    tags: ["terminal", "neovim", "tmux", "productivity", "linux"],
  },
  {
    id: "15",
    slug: "duckdb-analytical-queries",
    title: "DuckDB: The SQLite of Analytical Processing",
    category: "data-analytics",
    author: "Anonymous",
    date: "Jul 10, 2025",
    readTime: "8 min read",
    excerpt:
      "DuckDB processes millions of rows locally in milliseconds using columnar execution. Here's why data engineers are embracing in-process OLAP.",
    content: `Unlike traditional client-server databases, DuckDB runs in-process inside Python, Node.js, or WASM. Its vectorized columnar engine queries Parquet files and CSVs directly with zero external database setup overhead.`,
    tags: ["duckdb", "sql", "analytics", "data", "python"],
  },
  {
    id: "16",
    slug: "react-native-architecture-2025",
    title: "The New React Native Architecture: Fabric & TurboModules",
    category: "mobile-edge",
    author: "Anonymous",
    date: "Jul 08, 2025",
    readTime: "9 min read",
    excerpt:
      "Goodbye JS Bridge! Explore how C++ JSI (JavaScript Interface), Fabric renderer, and TurboModules deliver 60fps native performance.",
    content: `The legacy React Native bridge serialized JSON async calls over a single thread. The new architecture uses JSI to expose native C++ objects directly to JavaScript, enabling synchronous native method calls and concurrent React rendering on mobile devices.`,
    tags: ["react-native", "mobile", "architecture", "javascript", "c++"],
  },
  {
    id: "17",
    slug: "git-advanced-techniques",
    title: "Advanced Git Techniques Every Developer Should Know",
    category: "tutorials",
    author: "Anonymous",
    date: "Jul 05, 2025",
    readTime: "9 min read",
    excerpt:
      "Move beyond git add, commit, push. Master interactive rebase, bisect, worktrees, and reflog to become a Git power user.",
    content: `Interactive rebase (git rebase -i) cleans messy commit history. Git bisect performs binary searches across commits to isolate regressions. Git worktrees let you checkout multiple branches simultaneously in separate directories without stashing code.`,
    tags: ["git", "version-control", "rebase", "workflow", "tutorial"],
  },
  {
    id: "18",
    slug: "design-patterns-modern-javascript",
    title: "Design Patterns in Modern JavaScript & TypeScript",
    category: "programming",
    author: "Anonymous",
    date: "Jul 02, 2025",
    readTime: "11 min read",
    excerpt:
      "Classic design patterns reimagined for JS/TS. Singleton, Observer, Strategy, and Factory patterns with practical TypeScript implementations.",
    content: `ES modules inherently act as Singletons. Modern Observer patterns use typed EventEmitters or RxJS Observables. Strategy patterns leverage TypeScript interfaces to interchange runtime behavior cleanly.`,
    tags: ["design-patterns", "javascript", "typescript", "architecture", "oop"],
  },
];

// --------------- localStorage helper for anonymous posts ---------------

const STORAGE_KEY = "echoverse_user_posts";

export function getUserPosts(): Post[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Post[]) : [];
  } catch {
    return [];
  }
}

export function saveUserPost(post: Post): void {
  const existing = getUserPosts();
  // Ensure default author is Anonymous
  if (!post.author || post.author.includes("Builder")) {
    post.author = "Anonymous";
  }
  existing.unshift(post);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

export function getAllPosts(): Post[] {
  const userPosts = getUserPosts();
  return [...userPosts, ...builtInPosts];
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return getAllPosts().filter((p) => p.category === categorySlug);
}

export function getPostsByTag(tagSlug: string): Post[] {
  const t = tagSlug.toLowerCase();
  return getAllPosts().filter((p) =>
    p.tags.some((tag) => tag.toLowerCase() === t)
  );
}

export function getAllTags(): { name: string; count: number }[] {
  const tagMap = new Map<string, number>();
  getAllPosts().forEach((p) => {
    p.tags.forEach((t) => {
      const lower = t.toLowerCase();
      tagMap.set(lower, (tagMap.get(lower) || 0) + 1);
    });
  });

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter((p) => p.featured);
}

export function searchPosts(query: string): Post[] {
  const q = query.toLowerCase().trim();
  return getAllPosts().filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
  );
}

export { builtInPosts };
