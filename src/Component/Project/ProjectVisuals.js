import styles from "./Project.module.css";

// Small SVG primitives shared by the project diagrams. Diagrams describe what each codebase does;
// they are illustrations, not screenshots.
const Box = ({ x, y, w, h = 44, title, sub, tone }) => (
  <g transform={`translate(${x} ${y})`} className={styles.vBox}>
    <rect width={w} height={h} rx="5" className={styles.vNode} />
    {tone && <rect width="2" height={h - 16} y="8" className={tone === "event" ? styles.vTickEvent : styles.vTick} />}
    <text x="12" y={sub ? 19 : h / 2 + 4} className={styles.vTitle}>
      {title}
    </text>
    {sub && (
      <text x="12" y="34" className={styles.vSub}>
        {sub}
      </text>
    )}
  </g>
);

// Small packets travel along each connector to show data moving; skipped when motion is reduced.
const motionAllowed = () => document.documentElement.classList.contains("motion-ok");

const Packet = ({ d, event, delay }) => (
  <circle r="2.6" opacity="0" className={event ? styles.vPacketEvent : styles.vPacket}>
    <animateMotion dur="2.4s" begin={`${delay}s`} repeatCount="indefinite" path={d} />
    <animate
      attributeName="opacity"
      values="0;1;1;0"
      keyTimes="0;0.15;0.8;1"
      dur="2.4s"
      begin={`${delay}s`}
      repeatCount="indefinite"
    />
  </circle>
);

// Stable per-path offset so packets on different connectors don't move in lockstep.
const packetDelay = (d) => {
  let hash = 0;
  for (let i = 0; i < d.length; i++) hash = (hash * 31 + d.charCodeAt(i)) % 997;
  return (0.9 + (hash % 7) * 0.33).toFixed(2);
};

const Edge = ({ d, label, lx, ly, anchor = "start", event, marker }) => {
  const delay = packetDelay(d);
  return (
    <g>
      <path d={d} pathLength="1" className={event ? styles.vEdgeEvent : styles.vEdge} markerEnd={`url(#${marker})`} />
      {motionAllowed() && <Packet d={d} event={event} delay={delay} />}
      {label && (
        <text x={lx} y={ly} textAnchor={anchor} className={styles.vLabel}>
          {label}
        </text>
      )}
    </g>
  );
};

const Arrow = ({ id }) => (
  <defs>
    <marker id={id} viewBox="0 0 8 8" refX="6" refY="4" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L8 4 L0 8 z" className={styles.vArrow} />
    </marker>
  </defs>
);

const Lane = ({ y, children }) => (
  <text x="16" y={y} className={styles.vLane}>
    {children}
  </text>
);

export const ClearDocsVisual = () => {
  const m = "cd-arrow";
  return (
    <svg viewBox="0 0 480 300" role="img" aria-labelledby="cd-title cd-desc" className={styles.svg}>
      <title id="cd-title">ClearDocs integrity check</title>
      <desc id="cd-desc">
        On upload, the file bytes are hashed with SHA-256 and the digest is stored in MySQL. On verification, the
        submitted file is re-hashed and compared with the stored digests. The result is written to an Elasticsearch
        audit log and published to Kafka, where an email consumer sends a notification.
      </desc>
      <Arrow id={m} />

      <Lane y="26">Upload</Lane>
      <Box x={16} y={36} w={112} title="File bytes" sub="multipart" />
      <Box x={160} y={36} w={112} title="SHA-256" sub="MessageDigest" tone="sync" />
      <Box x={304} y={36} w={160} title="MySQL" sub="stored digest" />
      <Edge d="M128 58 H156" marker={m} />
      <Edge d="M272 58 H300" marker={m} />

      <Lane y="128">Verify</Lane>
      <Box x={16} y={138} w={112} title="Submitted file" sub="enrollment no." />
      <Box x={160} y={138} w={112} title="SHA-256" sub="re-hash" tone="sync" />
      <Box x={304} y={138} w={160} title="Compare digests" sub="match | no match" tone="sync" />
      <Edge d="M128 160 H156" marker={m} />
      <Edge d="M272 160 H300" marker={m} />
      <Edge d="M440 80 V134" label="stored" lx={432} ly={112} anchor="end" marker={m} />

      <Lane y="230">Record</Lane>
      <Box x={16} y={240} w={112} title="audit_logs" sub="Elasticsearch" />
      <Box x={160} y={240} w={112} title="Email" sub="consumer" tone="event" />
      <Box x={304} y={240} w={160} title="Kafka" sub="verification event" tone="event" />
      <Edge d="M330 182 V210 H72 V236" label="audit" lx={200} ly={204} anchor="middle" marker={m} />
      <Edge d="M420 182 V236" label="publish" lx={428} ly={214} event marker={m} />
      <Edge d="M304 262 H276" event marker={m} />
    </svg>
  );
};

export const PeerVaultVisual = () => {
  const m = "pv-arrow";
  return (
    <svg viewBox="0 0 480 296" role="img" aria-labelledby="pv-title pv-desc" className={styles.svg}>
      <title id="pv-title">Peer Vault service topology</title>
      <desc id="pv-desc">
        A React client calls the Spring Cloud Gateway, which validates JWTs, looks up services in Eureka and routes
        to the file and user services. The file service stores content on IPFS by content ID. Both services publish
        events to Kafka, and the notification service consumes them to send email.
      </desc>
      <Arrow id={m} />

      <Box x={16} y={20} w={112} title="Client" sub="React" />
      <Box x={164} y={20} w={176} title="Gateway" sub="JWT filter · routes" tone="sync" />
      <Box x={376} y={20} w={88} title="Eureka" sub="registry" />
      <Edge d="M128 42 H160" marker={m} />
      <Edge d="M340 42 H372" marker={m} />

      <Box x={16} y={124} w={136} title="file-service" sub="upload · share" tone="sync" />
      <Box x={172} y={124} w={136} title="user-service" sub="BCrypt · JPA" tone="sync" />
      <Box x={328} y={124} w={136} title="notification" sub="Spring Mail" tone="event" />
      <Edge d="M200 64 V94 H84 V120" label="route" lx={142} ly={88} anchor="middle" marker={m} />
      <Edge d="M268 64 V120" label="route" lx={276} ly={98} marker={m} />

      <Box x={16} y={232} w={136} title="IPFS" sub="content by CID" />
      <Box x={172} y={232} w={292} title="Kafka" sub="user-registration · file-shared" tone="event" />
      <Edge d="M48 168 V228" label="store" lx={56} ly={204} marker={m} />
      <Edge d="M120 168 V196 H204 V228" label="publish" lx={162} ly={190} anchor="middle" event marker={m} />
      <Edge d="M268 168 V228" label="publish" lx={276} ly={204} event marker={m} />
      <Edge d="M420 232 V172" label="consume" lx={412} ly={206} anchor="end" event marker={m} />
    </svg>
  );
};

export const FormFusionVisual = () => {
  const m = "ff-arrow";
  const steps = [
    { title: "POST /auth/register", sub: "account created" },
    { title: "OTP by email", sub: "EmailService" },
    { title: "POST /auth/verify", sub: "email + otp" },
    { title: "POST /auth/login", sub: "returns JWT" },
  ];
  const model = [
    { x: 256, w: 208, title: "User", sub: "owner" },
    { x: 276, w: 188, title: "Form", sub: "shareable link" },
    { x: 296, w: 168, title: "Question", sub: "per form" },
    { x: 316, w: 148, title: "Answer / Response", sub: "submitted via link" },
  ];
  return (
    <svg viewBox="0 0 480 280" role="img" aria-labelledby="ff-title ff-desc" className={styles.svg}>
      <title id="ff-title">Form Fusion sign-up flow and data model</title>
      <desc id="ff-desc">
        Sign-up: register, receive a one-time code by email, verify it, then log in to receive a JWT. Data model:
        a user owns forms, a form has questions, and answers and responses are submitted through the form link.
      </desc>
      <Arrow id={m} />

      <Lane y="22">Sign-up</Lane>
      {steps.map((step, i) => (
        <g key={step.title}>
          <Box x={16} y={32 + i * 62} w={208} title={step.title} sub={step.sub} tone={i === 3 ? "sync" : undefined} />
          {i < steps.length - 1 && <Edge d={`M60 ${76 + i * 62} V${90 + i * 62}`} marker={m} />}
        </g>
      ))}

      <text x="256" y="22" className={styles.vLane}>
        Data model
      </text>
      {model.map((item, i) => (
        <g key={item.title}>
          <Box x={item.x} y={32 + i * 62} w={item.w} title={item.title} sub={item.sub} tone={i === 1 ? "sync" : undefined} />
          {i > 0 && (
            <path
              d={`M${item.x - 10} ${76 + (i - 1) * 62} V${54 + i * 62} H${item.x - 4}`}
              pathLength="1"
              className={styles.vEdge}
              markerEnd={`url(#${m})`}
            />
          )}
        </g>
      ))}
    </svg>
  );
};

const visuals = {
  cleardocs: ClearDocsVisual,
  peervault: PeerVaultVisual,
  formfusion: FormFusionVisual,
};

export default visuals;
