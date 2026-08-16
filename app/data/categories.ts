export interface Category {
  slug: string;
  name: string;
  icon: string;
  color: string;       // primary accent hsl
  gradient: string;    // card gradient
  description: string;
}

export const categories: Category[] = [
  {
    slug: "ai-ml",
    name: "AI / ML",
    icon: "🤖",
    color: "hsl(280, 85%, 65%)",
    gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(88, 28, 135, 0.4))",
    description:
      "Explore artificial intelligence, machine learning models, neural networks, LLMs, and cutting-edge research shaping tech.",
  },
  {
    slug: "web-dev",
    name: "Web Dev",
    icon: "🌐",
    color: "hsl(195, 95%, 55%)",
    gradient: "linear-gradient(135deg, rgba(14, 165, 233, 0.25), rgba(3, 105, 161, 0.4))",
    description:
      "Frontend frameworks, WebGPU, browser engines, performance optimization, and modern web architecture.",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    icon: "🔒",
    color: "hsl(350, 90%, 60%)",
    gradient: "linear-gradient(135deg, rgba(244, 63, 94, 0.25), rgba(159, 18, 57, 0.4))",
    description:
      "Ethical hacking, vulnerability research, zero-trust architecture, supply chain defense, and cryptography.",
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    icon: "☁️",
    color: "hsl(170, 85%, 50%)",
    gradient: "linear-gradient(135deg, rgba(20, 184, 166, 0.25), rgba(15, 118, 110, 0.4))",
    description:
      "Kubernetes, Docker, CI/CD pipelines, infrastructure as code, and cloud-native resilience.",
  },
  {
    slug: "open-source",
    name: "Open Source",
    icon: "💡",
    color: "hsl(45, 95%, 55%)",
    gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(180, 83, 9, 0.4))",
    description:
      "Contributing to free software, Linux kernel patches, open licensing, and building developer communities.",
  },
  {
    slug: "programming",
    name: "Programming",
    icon: "⚡",
    color: "hsl(140, 80%, 50%)",
    gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.25), rgba(21, 128, 61, 0.4))",
    description:
      "Systems programming in Rust & Go, memory safety, algorithms, and writing high-performance code.",
  },
  {
    slug: "tutorials",
    name: "Tutorials",
    icon: "📖",
    color: "hsl(220, 90%, 65%)",
    gradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(67, 56, 202, 0.4))",
    description:
      "Step-by-step guides, practical CLI building, and hands-on learning paths for builders.",
  },
  {
    slug: "mobile-edge",
    name: "Mobile & Edge",
    icon: "📱",
    color: "hsl(320, 85%, 60%)",
    gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.25), rgba(157, 23, 77, 0.4))",
    description:
      "Edge computing, WebAssembly runtimes, cross-platform mobile apps, and low-latency client architecture.",
  },
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    icon: "📊",
    color: "hsl(160, 85%, 45%)",
    gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(4, 120, 87, 0.4))",
    description:
      "Distributed databases, vector indexes, real-time stream processing, and big data engineering.",
  },
  {
    slug: "dev-environment",
    name: "Dev Environment",
    icon: "🛠️",
    color: "hsl(210, 95%, 60%)",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(29, 78, 216, 0.4))",
    description:
      "Developer productivity, Neovim/VSCode setups, terminal mastery, shell automation, and build tooling.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
