/* eslint-disable react/prop-types */
import pinpoint from "../assets/Fill 219.png"

const Home = ({items}) => {


  return (
    <>
        <main className='mx-auto w-fit mt-6'>
        {
          items ? (
            items.map((item, index)=>(
              <section key={index} className='flex items-center gap-5 py-6'>
              <div className="rounded-md">
                <img style={{objectFit:"contain", borderRadius:'6px'}} className=' max-w-[15rem] min-w-[2.8rem] h-full rounded-md' src= {item.image}   alt="" />
              </div>
              <div className=' max-w-[38rem]'>
                  <div className='flex items-center  py-2 gap-10'>
                    <div className='flex items-center gap-1'>
                      <img className='h-[10px] w-[7px]' src={pinpoint}   alt="" />
                      <p className='uppercase font-normal text-[10.24px] text-[#2b283a]'>  {item.country}  </p>
                    </div>
                    <a className='underline text-[10.24px] text-[#918e9b]' href="#">View on Google Maps</a>
                  </div>
                  <h1 className='text-[1.5rem] font-bold pb-3 text-[#2b283a]'> {item.tourist}  </h1>

                  <p className='py-1 font-bold text-[10.24px] text-[#2b283a]'>  {item.date}   </p>
                  <p className="text-[10.24px] text-[#2b283a]">{item.summary}</p>

              
              </div>
          
          </section> 
            ))
          ) : (
            <p>Loading data...</p>
          )
        }
     </main>
      
    </>
  )
   
  }
export default Home
