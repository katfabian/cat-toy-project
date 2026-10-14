import "./HowItWorks.css";

function HowItWorks () {
    const howitworks = [
        {
            number: "01",
            title: "Straight Roll",
            color: "blue",
            description:
            "on smooth, flat surfaces the ring rolls in a clean straight line."
        },
           {
            number: "02",
            title: "Wobble",
            color: "green",
            description:
            "Slight surface variation causes the ring to wobble unpredictably, triggering your cat's chase response.",
        },
           {
            number: "03",
            title: "Bounce & Redirect",
            color: "orange",
            description:
             "When it hits an obstacle, it bounces and changes direction—mimicking live prey that dodges.",
        },
           {
            number: "04",
            title: "Unpredictable Chase",
            color: "purple",
            description:
            "The ring tumbles in unexpected arcs so your cat stays engaged for extended play sessions.",
        },
     ];

   return (
    <section className="rolling">
      <span className="section-badge">
        Rolling Behavior
      </span>

      <h2>
        How it <span>moves</span>
      </h2>

      <p className="section-description">
        The unique ring shape creates four distinct movement
        patterns that keep cats guessing—and hunting.
      </p>

<div className="movement-grid">
  {howitworks.map((movement) => (
    <div
      key={movement.number}
      className="movement-card"
    >
      <div className={`movement-number ${movement.color}`}>
        {movement.number}
      </div>

      <div className={`movement-ring ${movement.color}`}></div>

      <h3>{movement.title}</h3>

      <p>{movement.description}</p>
    </div>
  ))}
</div>
    </section>
  );
}

export default HowItWorks;