import React from 'react'

const EarnNFT = () => {
  return (
    <main className='d-grid col-12 px-4 min-vh-75 overflow-y-scroll hidden-scrollbar'>
      <section className='d-flex justify-content-between col-12 pt-3'>
        <div>
          <h2>Course: UI/UX Design</h2>
          <h2>Tutor: Goldpilot</h2>
          <small>Updated on: Dec 23, 2023</small>
        </div>

        <div className='d-flex align-items-center gap-2'>
          <small>Time remaining:</small>
          <p className='border border-2 d-grid justify-content-center align-items-center rounded-circle' style={{height: '3.5rem', width: '3.5rem'}}>34:30</p>
        </div>
      </section>

      <section className='d-flex flex-column-reverse flex-md-row col-12 pt-4 gap-4 gap-md-0'>
        <div className='col-12 col-md-9 d-grid gap-4 pe-0 pe-md-4'>
          <div className='d-grid gap-4 bg-primary p-3 rounded-3'>
            <h2>Question 5</h2>
            <p>When was NFTs First Introduced?</p>
          </div>

          <div className='d-grid gap-4 bg-primary p-3 rounded-3'>
            <div className='d-flex gap-3 align-items-center'>
              <input type="radio" name="answer" id="" />
              <label htmlFor="answer">2001</label>
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <input type="radio" name="answer" id="" />
              <label htmlFor="answer">2010</label>
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <input type="radio" name="answer" id="" />
              <label htmlFor="answer">2014</label>
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <input type="radio" name="answer" id="" />
              <label htmlFor="answer">2023</label>
            </div>
          </div>

          <div className='col-12 col-md-9 d-flex justify-content-center gap-1'>
            <button className='col-5 col-md-3 p-2 rounded-3 bg-white btn-outline-white border-0 text-primary'>&lt; Previous</button>
            <button className='col-5 col-md-3 p-2 rounded-3 bg-primary btn-outline-primary border-0 text-white'>Next &gt;</button>
          </div>

          <div className='d-flex justify-content-center'>
            <button className='col-10 d-block d-md-none p-2 rounded-3 bg-primary btn-outline-primary border-0 text-white'>Submit</button>
          </div>
        </div>

        <aside className='col-12 col-md-3 d-grid gap-4'>
          <div className='d-grid col-12 gap-1 bg-bg p-3 rounded-3'>
            <small>Question: 1-30</small>
            <div className='d-flex flex-wrap gap-2 mt-2'>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>1</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>2</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>3</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>4</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>5</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>6</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>7</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>8</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>9</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>10</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>11</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>12</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>13</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>14</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>15</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>16</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>17</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>18</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>19</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>20</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>21</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>22</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>23</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>24</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>25</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>26</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>27</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>28</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>29</button>
              <button className='border border-2 text-white rounded-circle d-flex justify-content-center align-items-center bg-transparent' style={{height: '2.5rem', width: '2.5rem'}}>30</button>
            </div>
          </div>

          <button className='d-none d-md-block p-2 rounded-3 bg-primary btn-outline-primary border-0 text-white'>Submit</button>
        </aside>
      </section>
    </main>
  )
}

export default EarnNFT
