import classes from './News.module.css'


const News = (props) => {
    return(
        <div className={classes.news}>
            <h2>My feeds</h2>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet minus dolor error libero autem? Esse quo magnam enim natus totam, molestiae placeat maxime possimus tempore debitis aliquid? Incidunt, accusantium recusandae!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit impedit quasi, voluptatem iure tempore pariatur iste fugit cum harum, repellendus optio perspiciatis enim repudiandae consequuntur minima voluptatibus eaque sequi dolores!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam omnis numquam provident porro, suscipit vel voluptas ipsam culpa! Facere ratione porro at nobis, soluta expedita mollitia? Fuga quos esse cumque?</p>
            </div>
        </div>
    )
}

export default News