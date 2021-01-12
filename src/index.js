import React from 'react'
import styles from './styles.module.css'

// export const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }

// function BeatingHeart() {
//   return (
//     <div>
//       <span className={styles.beatingheart}>&#10084;&#65039;</span>
//     </div>
//   )
// }
// export default BeatingHeart

export const BeatingHeart = () => {
  return (
    <div className={styles.containerdiv}>
      <span className={styles.beatingheart}>&#10084;&#65039;</span>
    </div>
  )
}
