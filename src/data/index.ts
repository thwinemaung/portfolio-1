export const SEC_IDS    = ['hero','about','projects','experience','education','skills','contact'];
export const SEC_LABELS = ['Home','About','Projects','Experience','Education','Skills','Contact'];
export const FILTER_TYPES = ['All','Backend','DevOps','Full-stack','Tooling'];

export interface Project {
  id: number; kind: 'personal' | 'freelance'; name: string; desc: string;
  tags: string[]; type: string; year: string; role: string; duration: string;
  client: string | null; url: string; outcomes: string[];
}

export const PROJECTS: Project[] = [
  { id:1, kind:'personal',  name:'Distributed Task Queue',      desc:'Fault-tolerant job queue on Redis. 50k+ jobs/sec.',
    tags:['Go','Redis','Docker'],               type:'Backend',    year:'2024', role:'Solo build',     duration:'3 mo',  client:null,                url:'github.com/alex/queue',
    outcomes:['50k+ jobs/sec throughput','Dead-letter queues + dashboard','Graceful degradation under load'] },
  { id:2, kind:'freelance', name:'CI/CD Pipeline Framework',    desc:'Declarative pipeline-as-code with pluggable runners.',
    tags:['TypeScript','Node.js','GH Actions'], type:'DevOps',     year:'2024', role:'Tech lead',      duration:'4 mo',  client:'Linear (contract)', url:'private',
    outcomes:['40% faster CI runs','YAML-defined, pluggable','4 internal teams adopted'] },
  { id:3, kind:'personal',  name:'Real-time Collaboration API', desc:'WebSocket sync engine for collaborative document editing.',
    tags:['Rust','WebSocket','PostgreSQL'],     type:'Backend',    year:'2023', role:'Solo build',     duration:'5 mo',  client:null,                url:'github.com/alex/sync',
    outcomes:['1000+ concurrent sessions','<100ms latency','OT-based sync in Rust'] },
  { id:4, kind:'freelance', name:'Developer Dashboard',         desc:'Internal observability: logs, metrics, deploy history.',
    tags:['React','Python','Grafana'],          type:'Full-stack', year:'2023', role:'Backend + UI',   duration:'6 mo',  client:'Mercado (contract)',url:'private',
    outcomes:['Replaced 6 tools','MTTD: 12→3 min','Org-wide adoption'] },
  { id:5, kind:'freelance', name:'Auth Service',                desc:'Stateless JWT auth with OAuth2, PKCE, audit logging.',
    tags:['Go','JWT','OAuth2'],                 type:'Backend',    year:'2022', role:'Sole engineer',  duration:'2 mo',  client:'Pylon (contract)',  url:'private',
    outcomes:['Serves 8 internal services','Token rotation + PKCE','Structured audit to SIEM'] },
  { id:6, kind:'personal',  name:'CLI Scaffolding Tool',        desc:'Interactive CLI generating opinionated service templates.',
    tags:['Python','Jinja2','Click'],           type:'Tooling',    year:'2022', role:'Solo build',     duration:'6 wk',  client:null,                url:'github.com/alex/scaffold',
    outcomes:['30+ engineers use daily','4 hrs → <10 min setup','Built-in lint, test, CI'] },
];

export interface Experience {
  title: string; company: string; location: string; period: string;
  summary: string; bullets: string[]; stack: string[]; team: string;
}

export const EXPERIENCE: Experience[] = [
  {
    title:'Senior Software Engineer', company:'Acme Corp', location:'Remote', period:'2022 – Present',
    summary:'Lead engineer on the platform team. Own the job queue, auth service, and internal developer tooling. Mentor two junior engineers.',
    bullets:[
      'Architected the company-wide job queue (50k+ jobs/sec) replacing three legacy systems.',
      'Cut CI runtime by 40% across 80 repos through caching and parallelization redesign.',
      'Mentor 2 junior engineers; run weekly system-design office hours.',
      'On-call rotation lead: reduced page volume 35% via SLO tuning and runbook investment.',
    ],
    stack:['Go','Rust','PostgreSQL','Redis','Kubernetes','Terraform'],
    team:'8 engineers',
  },
  {
    title:'Software Engineer', company:'Stripe', location:'San Francisco, CA', period:'2020 – 2022',
    summary:'Radar fraud detection. Reduced false-positive rate by 18% via ML feature engineering and pipeline work.',
    bullets:[
      'Owned 3 of the top-10 features in the production fraud model.',
      'Migrated nightly Spark batch to streaming Flink pipelines (~minutes-fresh signal).',
      'Built shadow-evaluation harness adopted by the wider Radar team.',
    ],
    stack:['Python','Scala','Flink','Spark','BigQuery'],
    team:'12 engineers + 4 DS',
  },
  {
    title:'Software Engineer', company:'Vercel', location:'Remote', period:'2019 – 2020',
    summary:'Serverless build system. Improved Node.js runtime cold-start latency by 30% via profiling and caching.',
    bullets:[
      'Profiled and rewrote the Node.js bootstrapper, cutting p50 cold-start from 450ms → 310ms.',
      'Introduced layered build cache reused across deploy frames.',
      'Wrote internal RFC adopted as the team\'s build-isolation contract.',
    ],
    stack:['Node.js','TypeScript','AWS Lambda','Rust'],
    team:'5 engineers',
  },
  {
    title:'Backend Engineer', company:'Airtable', location:'San Francisco, CA', period:'2018 – 2019',
    summary:'Worked on the realtime sync engine and scripting block. Shipped collaboration features to enterprise customers.',
    bullets:[
      'Shipped per-cell presence indicators, used by 70% of weekly active workspaces.',
      'Hardened the sync transport against partition scenarios surfaced in chaos drills.',
      'Authored the public scripting-block sandbox security model.',
    ],
    stack:['TypeScript','Node.js','PostgreSQL','WebSocket'],
    team:'6 engineers',
  },
  {
    title:'Software Engineer Intern', company:'Google', location:'Mountain View, CA', period:'Summer 2018',
    summary:'Maps Platform — quotas and rate-limiting infrastructure. Returned a full-time offer.',
    bullets:[
      'Designed and shipped a per-API-key burst-credit rate limiter into production.',
      'Wrote benchmarks demonstrating <1ms p99 overhead at production traffic.',
      'Returned a full-time offer (declined for Vercel).',
    ],
    stack:['Go','C++','Spanner','Borg'],
    team:'4 engineers',
  },
];

export const EDUCATION = [
  { degree:'B.S. Computer Science', school:'UC Berkeley', year:'2019', desc:'Focus on distributed systems and programming languages. Senior thesis on consensus algorithms.' },
];

export const CERTS = [
  { badge:'AWS', name:'Solutions Architect – Associate',    issuer:'Amazon Web Services', year:'2023' },
  { badge:'CKA', name:'Certified Kubernetes Administrator', issuer:'CNCF',               year:'2022' },
  { badge:'GCP', name:'Professional Cloud Developer',       issuer:'Google Cloud',        year:'2022' },
  { badge:'TF',  name:'Terraform Associate',                issuer:'HashiCorp',           year:'2021' },
];

export const SKILLS = [
  { cat:'Languages',      tags:['Go','TypeScript','Python','Rust','SQL','Bash'] },
  { cat:'Backend',        tags:['gRPC','REST','GraphQL','WebSockets','Redis','PostgreSQL','Kafka'] },
  { cat:'Infrastructure', tags:['Docker','Kubernetes','Terraform','AWS','GCP','GitHub Actions','Prometheus'] },
  { cat:'Practices',      tags:['System Design','TDD','Code Review','On-call','Tech Writing','API Design'] },
];

export const SOCIALS = [
  { id:'github',   label:'GitHub',       href:'#' },
  { id:'linkedin', label:'LinkedIn',     href:'#' },
  { id:'twitter',  label:'X / Twitter',  href:'#' },
  { id:'email',    label:'Email',        href:'mailto:alex@example.com' },
];

export const CONTACT_LINKS = [
  { id:'email',    label:'Email',        value:'alex@example.com',          href:'mailto:alex@example.com', note:'Best way to reach me' },
  { id:'linkedin', label:'LinkedIn',     value:'linkedin.com/in/alexreyes',  href:'#',                       note:'Connect professionally' },
  { id:'github',   label:'GitHub',       value:'github.com/alexreyes',       href:'#',                       note:'See my work' },
  { id:'twitter',  label:'X / Twitter',  value:'x.com/alexreyes',            href:'#',                       note:'Follow for updates' },
];
