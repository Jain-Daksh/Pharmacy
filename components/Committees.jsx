import React from 'react'

const committees = [
  {
    "id": "1",
    "heading": "Anti Ragging ",
    "paragraph": "Ragging is strictly forbidden in or outside the college campus. All students shall familiarize themselves with rules/regulations/guidelines on code of conduct, Anti-ragging measures and discipline college"
  },
  {
    "id": "2",
    "heading": "Gender Sensitization ",
    "paragraph": "The cell has also been mainly entrusted with taking up cases of harassment and atrocities on female teachers, employees and girl students,they  take appropriate action against the culprits."
  },
  {
    "id": "3",
    "heading": "Anti Discrimination ",
    "paragraph": "The College ensures that every individual inside the campus exercise equal rights and acquire in the process of offering or receiving education. Justice, Peace and Revolution are the roots based on which the living system exist in the campus"
  },
 
  {
    "id": "4",
    "heading": "Placement ",
    "paragraph": "The placement cell collaborates with several pharma industries and hospitals to provide opportunities to the students of pharmacy for employment and has facilitated promising candidates in the field of health care and pharmaceutical industry."
  },
]

function Committees() {
  return (
    <>
      <section className='section1'>
        <div className='container'>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h2 className="mb-5 text-center heading"> Committees</h2>
            </div>
          </div>
          <div className='row'>
            {
              committees.map((value) => (
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="card card-service  mx-2 my-2">
                    <div className="card-body ">
                      <h5 className="sub-heading">{value.heading}</h5>
                      <p className="paragraph">{value.paragraph}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Committees