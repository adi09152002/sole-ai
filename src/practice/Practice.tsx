import { useState, type ReactNode } from 'react'
import styles from './Practice.module.css'

import { NavUnderline } from './exercises/NavUnderline'
import { HeroStagger } from './exercises/HeroStagger'
import { CardGrid } from './exercises/CardGrid'
import { DrawLine } from './exercises/DrawLine'
import { ScrollReveal } from './exercises/ScrollReveal'
import { ButtonStates } from './exercises/ButtonStates'

/**
 * CSS animation practice page. Reached at #/practice — it is not part of
 * the landing page and nothing here is imported by App's marketing sections.
 *
 * Each exercise below renders finished markup with the animation CSS left
 * blank. Open the paired .module.css file, follow the TODO comments, and
 * `npm run dev` will hot-reload the change.
 */

type ExerciseProps = {
  n: number
  title: string
  brief: string
  learn: string[]
  file: string
  /** Adds a button that remounts the demo, for re-triggering @keyframes. */
  replayable?: boolean
  /** Let the demo fill the stage edge to edge (scroll containers need this). */
  flush?: boolean
  children: ReactNode
}

const Exercise = ({ n, title, brief, learn, file, replayable, flush, children }: ExerciseProps) => {
  const [runId, setRunId] = useState(0)

  return (
    <section className={styles.card}>
      <div className={styles.cardHead}>
        <span className={styles.number}>{n}</span>
        <div>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.brief}>{brief}</p>
          <div className={styles.learn}>
            {learn.map((item) => (
              <span key={item} className={styles.chip}>
                {item}
              </span>
            ))}
          </div>
          <p className={styles.file}>{file}</p>
        </div>
      </div>

      <div className={`${styles.stage} ${flush ? styles.stageFlush : ''}`}>
        <div key={runId} style={{ width: '100%' }}>
          {children}
        </div>
      </div>

      {replayable && (
        <div className={styles.replay}>
          <button className={styles.replayButton} onClick={() => setRunId((id) => id + 1)}>
            Replay
          </button>
        </div>
      )}
    </section>
  )
}

export const Practice = () => {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.masthead}>
          <p className={styles.eyebrow}>Scratch space</p>
          <h1 className={styles.title}>CSS animation practice</h1>
          <p className={styles.lede}>
            Six exercises, easiest first. The markup is done; the animation CSS is not. Work through
            one file at a time and keep to <code>transform</code> and <code>opacity</code> wherever
            you can — those are the two properties the browser can animate on the compositor without
            re-running layout or paint.
          </p>
          <a className={styles.backLink} href="./index.html">
            ← Back to the landing page
          </a>
          <p className={styles.note}>
            Heads up: <code>src/index.css</code> has a global{' '}
            <code>prefers-reduced-motion</code> block that force-disables animation. If nothing
            moves here, turn off "reduce motion" in your OS display settings.
          </p>
        </header>

        <Exercise
          n={1}
          title="Nav underline that grows from the left"
          brief="The underline is currently always visible. Make it collapse to nothing and expand from the left edge on hover — by scaling it, not by animating width."
          learn={['transform: scaleX()', 'transform-origin', 'transition']}
          file="src/practice/exercises/NavUnderline.module.css"
        >
          <NavUnderline />
        </Exercise>

        <Exercise
          n={2}
          title="Staggered hero entrance"
          brief="Fade and lift the headline, subhead and button in sequence on load. Write one @keyframes and offset each child with animation-delay."
          learn={['@keyframes', 'animation-delay', 'animation-fill-mode']}
          file="src/practice/exercises/HeroStagger.module.css"
          replayable
        >
          <HeroStagger />
        </Exercise>

        <Exercise
          n={3}
          title="Card hover lift, siblings dim"
          brief="Lift the hovered card with a softer, larger shadow — then use :has() on the grid to fade the cards that are not hovered."
          learn={[':has()', 'cubic-bezier()', 'box-shadow']}
          file="src/practice/exercises/CardGrid.module.css"
        >
          <CardGrid />
        </Exercise>

        <Exercise
          n={4}
          title="Self-drawing SVG line"
          brief="The path is drawn all at once. Dash it, offset the dash by its own length to hide it, then animate the offset back to zero."
          learn={['stroke-dasharray', 'stroke-dashoffset', 'pathLength']}
          file="src/practice/exercises/DrawLine.module.css"
          replayable
        >
          <DrawLine />
        </Exercise>

        <Exercise
          n={5}
          title="Scroll reveal, no JavaScript"
          brief="Reveal each row as it enters the scroll box using a scroll-driven animation. No observers, no listeners — two properties do it."
          learn={['animation-timeline: view()', 'animation-range', 'entry']}
          file="src/practice/exercises/ScrollReveal.module.css"
          flush
        >
          <ScrollReveal />
        </Exercise>

        <Exercise
          n={6}
          title="Button press and loading spinner"
          brief="Give the button a physical press on :active, then spin the loader that appears for a second and a half after you click."
          learn={['@keyframes rotate', ':active', 'animation-iteration-count']}
          file="src/practice/exercises/ButtonStates.module.css"
        >
          <ButtonStates />
        </Exercise>
      </div>
    </main>
  )
}
