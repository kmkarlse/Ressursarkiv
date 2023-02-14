import ProductTitle from "./Title"
import ProductPrice from "./Url"
import ProductCatagory from "./Catagory"

export default function ProductCard({title, url, cat}) {
    return(
      <article className="product-card">
        <ProductTitle title={title} />
        <ProductPrice url={url}/>
        <ProductCatagory category={cat} />
      </article>
    )
  }