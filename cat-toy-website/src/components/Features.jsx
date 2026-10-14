import "./Features.css";

function Features () {
const features = [
   {
    icon: "🛡️",
    title: "Safe by Design",
    description: 
        "made from non-toxic, flexile rubber/TPE. No small parts, no sharp edges - just pure, worry-free play.",
    color: "blue",
    },

    { 
        icon: "🪶",
        title: "Lightweight & Easy",
        description:
             "Weighs almost nothing, so cats can bat, toss, and carry it wihtout fatigue.",
        color: "green",
    },

    {
        icon: "🔇",
        title: "Whisper Quiet",
        description: 
             "Soft material means no noisy clattering across hard floors.",
        color: "orange",
    },

    {
        icon: "⚡",
        title: "Stimulating Motion",
        description: 
            "Unpredictable rolling behavior mimics prey movement and keeps cats engaged.",
        color: "purple",
    },

    {
        icon: "🔄",
        title: "Durable & Long Lasting",
        description: 
            "Built to wihstand biting, clawing, and hundreds of play sessions",
        color: "pink",
    },

    {
        icon: "❤️",
        title: "Vet Approved",
        description:
        "Designed with feline behavior in mind to encourage healthy play",
        color: "orange",
    },
];

return (
    <section className="features">

        <span className="section-badge">
            Why Cats Love It
        </span>

        <h2>
            Designed for <span>real play</span>
        </h2>

        <p className="section-description">
            Every detail of the Rolling Ring was considered with your
            cat'safety, joy, and natural instincts in mind.
        </p>

      <div className="feature-grid">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="feature-card"
          >
            <div className={`feature-icon ${feature.color}`}>
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Features;