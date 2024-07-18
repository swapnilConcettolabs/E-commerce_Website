import { useEffect, useState } from 'react'
import './index.css'
import data from './data/faqsData'
import productData from './data/productData'
// import { ProductSection } from './components/ProductSection'
import { TestimonialSection } from './components/TestimonialSection'
import { FaqSection } from './components/FaqSection'
import { Footer } from './components/Footer'
import { Loading } from './components/Loading'
import { Products } from './components/Products'
import { NavBar } from './components/NavBar'




function App() {

  const [questions, setQuestions] = useState(data)
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const [cartCount,setCartCount] = useState(0)


  const handleAddToCart = () => {
    setCartCount(cartCount+1)
  }


const fetchProducts = () => {
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
    setProducts(productData)
  },2000)
}


useEffect(()=>{
  fetchProducts()
},[])


if(loading){
  return(
    <main>
      <Loading />
    </main>
  )
}

  return (
    <>
      <NavBar count={cartCount}/>
      <div className="line"></div>
      <Products products={products} onAddToCart={handleAddToCart}/>
      <main>
        <section className='testimonial-container'>
          <div className='title'>
            <h2>Our Testimonials</h2>
            <div className='underline'></div>
          </div>
          <TestimonialSection />
        </section>
      </main>
      <div className='faq'>
        <div className='faq-container'>
          <h3>FAQ's</h3>
          <div className='underLine'></div>
          <section className='info'>
            {questions.map((question) => {
              return <FaqSection key={question.id} {...question} />
            })}
          </section>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
