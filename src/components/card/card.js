import Image from 'next/image'
import styles from './card.module.sass'
import Button from '../button/button'
import ConditionalRender from '../conditionalrender'
import getCategoryColor from '@/helpers/get-category-colors'
 
const Card = (props) =>(
    <div className={`${styles.card_wrap} ${props.className || ''} `}>
        <div className={styles.card}>
            <div className={styles.card_imageWrap}>
                <div className={styles.card_image}>
                    <Image src='/feature-img-1.png' alt='thumbnail' fill={true}></Image>
                </div>
            </div>
            <div className={styles.card_content}>
                <ConditionalRender conditional={props.label}>
                    <div className={`${styles.card_label} h6 mb-10 c-${getCategoryColor(props.label)}`}>{props.label}</div>
                </ConditionalRender>
                <ConditionalRender conditional={props.title}>
                    <div className={`${styles.card_title} h3`}>{props.title}</div>
                </ConditionalRender>
                <ConditionalRender conditional={props.summary}>
                <p className={`${styles.card_summary} fw-600`}>
                    {props.summary}
                </p>
                </ConditionalRender>
                <ConditionalRender conditional={props.href}>
                    <Button href={props.href}>{props.btnLabel || "Read More"}</Button>
                </ConditionalRender>
                
            </div>
        </div>
    </div>
   
)

export default Card