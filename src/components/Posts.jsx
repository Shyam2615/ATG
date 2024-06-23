import React, { useState } from 'react'
import './Posts.css'

export default function Posts() {

  const[follow, setFollow] = useState(false);
  const[follow1, setFollow1] = useState(false);
  const[follow2, setFollow2] = useState(false);
  const[follow3, setFollow3] = useState(false);

  const handleFollow = () =>{
    setFollow(!follow);
  }
  const handleFollow1 = () =>{
    setFollow1(!follow1);
  }
  const handleFollow2 = () =>{
    setFollow2(!follow2);
  }
  const handleFollow3 = () =>{
    setFollow3(!follow3);
  }

  return (
    <>
    <div className="d-lg-none d-flex w-100 justify-content-around">
        <div className="posts">
          <span className='fw-bold'>Posts(368)</span>
        </div>
        <div className="filter">
          <button className='btn fw-bold'>
            Filter:All
            <img src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" />
          </button>
        </div>
      </div>
      <hr />
    <div className="d-flex justify-content-center">
        <div className='d-flex flex-column content border-1 rounded-2 mt-3'>
          <div className="d-flex image">
            <img src="https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EwvQaxFwWfv97F7HxzZF9vzhzkVgKy9jGZ7dBFCafzvlIoC5BK9hTZFUx3tL4RaDLK-ueT1qnvvqbvjWN~wmwRbuadsFXdKPtG40ng4ReInbBbaeM2LUsjdH7zzvTb2MeROtRhMouozsnsbIYBCURHT2hg8pOgdho9A1lAvDDe0lm7KXSI55Yomu4-5H8q-Skscfb3Mx1QGsXpLp8V6x3~N7Cxkeo9A7isvIqnpfWqFIoK1xfysZWC9TgkGCwf6QKy5JEj1k6HsVdimqAC~rkr77Ps9YFHl2pMsrVkCg2S6CMmvrzlXenTqP4hjGhsWZBS1J7eRzuUzjmDOhxcSh9g__" alt="error" />
          </div>
          <div className="d-flex category">
            <h5 className='mt-2 ml-3'>✍️Article</h5>
          </div>
          <div className="heading d-flex justify-content-between">
            <h3 className='mt-1 ml-3 topic'>What if famous brands had regular fonts? Meet RegulaBrands!</h3>
            <button className='btn'><div><i class="fa-solid fa-ellipsis"></i></div></button>
          </div>
          <div className="info mt-3 ml">
            <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
          </div>
          <div className="acc mt-3 d-flex align-items-end justify-content-between">
            <div className="account d-flex align-items-end">
              <img width="48" height="48" className='rounded-circle' src="https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xm~czUCGXNhA5DmsA7BWWdUXbbeGMXyZhyG6fZQt~CB-Dl7xN~kKXNwTf3T1M4GSrvqbIoEzT~jx8Uo0iDIP6Fkfn931pbtomfKbNw8FRSIevTQNlcpMcbyNF-KoHpfgE0rGUYn4CJ-jB2X3UeMywP7Cx8ZO5KM2NfHwJqRWtU8mm34DcfvxvlOdqluIwV-dkWDrx39C6wA2--oeJ7tAvD1QwUDLhfbqvw57e2grM3DfuQYqlzpWa6-WtRcojyduB6HJ~RDlvfXQ4K3TZtKS6DmBy4PL0PBZvwOot0XtgDNa9vEnJdxruqFi5VOkdB0Q5ISw3LgVSv4xHnZl4a7PpQ__" alt="error" />
              <p className='ml fw-bold'>Sarthak Kamra</p>
            </div>
            <div className="d-flex justify-content-around view">
              <span className='d-flex'><i class="fa-regular fa-eye mx-2"></i></span>
              <p className='d-flex'>1.4k views</p>
            </div>
            <div className="d-flex align-items-center share">
              <span className='d-flex'><i class="fa-solid fa-share-nodes"></i></span>
            </div>
          </div>

          <div className="d-flex image mt-4">
            <img src="https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7vv9aIW17QC8-v1o8V8TskKwHFL0BVsrpD74ChGjfr8dcMnyuH-Zp-VMor5jpGs3tQUXpstodF~hJNaoS1TepnOng7lFJsnfv076q0jvzTKVY538X-kPjfdyQ7iGhKCKqUzMC-eSPwfO2kPEy-Wz9K7pwB2VUpWZ4FhxTy4oIvjp9LDyOTdcnChd8gPBWXY4UHliH-bmUroJbK88sgsZ1jjaDOPpyCkMiqbmwhW2EBsgKzt7Ln4qvEK022Okln~Gt55mVk53OGNDLMTEMi71nNx6fAN3c-xhFZx4dLzNMfY8OOEMm7zTAIsEYq0cqOeZ1evtcHRAzC0wcsCgV17cA__" alt="error" />
          </div>
          <div className="d-flex category">
            <h5 className='mt-2 ml-3'>🔬️ Education</h5>
          </div>
          <div className="heading d-flex justify-content-between">
            <h3 className='mt-1 ml-3 topic'>Tax Benefits for Investment under National Pension Scheme launched by Government</h3>
            <button className='btn'><div><i class="fa-solid fa-ellipsis"></i></div></button>
          </div>
          <div className="info mt-3 ml">
            <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
          </div>
          <div className="acc mt-3 d-flex align-items-end justify-content-between">
            <div className="account d-flex align-items-end">
              <img width="48" height="48" className='rounded-circle' src="https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IVoO4d30R~TBKXmV34-sy8cex-z4PfIGbULRMukph6pgaR1P~1~zt7bjWMADAC4S60LvHJ-SoD3P0whyHESvwmPbBjS14X~-sDqSmaLHFoI8j7vRlgxRM3ZiCbNOYHYxzlPhvDu1jr4AMR9YlylviUNhzYaw5CfFZxiZ1XOGBVyd-NeIFggbDcMzPE8sVPW5m11T8R6~OzXCF~rHdjLOQ0u5uZ8lvFqunsPS7ma1lvxanOzkmrpUbwd8bWgdvVD5~XuWBcydnGY28PzEmrJjU0t30aHWoaJ9vBmV2vcKAGjZP2HgOzjcAqoBUB2jS7Cu-CjwuCwlJXXr01mqMAaBag__" alt="error" />
              <p className='ml fw-bold'>Sarah West</p>
            </div>
            <div className="d-flex justify-content-around view">
              <span className='d-flex'><i class="fa-regular fa-eye mx-2"></i></span>
              <p className='d-flex'>1.4k views</p>
            </div>
            <div className="d-flex align-items-center share">
              <span className='d-flex'><i class="fa-solid fa-share-nodes"></i></span>
            </div>
          </div>

          <div className="d-flex image mt-4">
            <img src="https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ll5sqn9YuE-evKrJAgN86lIVC-EGZf8wiAw1nq7yAryNBOkq7Sg8hKImeS7LeiCBxcRUy0JhqQVzNiHagbk~JVvkW8BSoPvEKIaXZD0RCE7cbbNavBBaU~zfmUvq9agcyHvtxph9jVXyYGeWEfxfe-pVLgnhNz6y02jHe6UgdYcm0VzxdXGkGplvS8Q9OZwlKDbB17ne1wSNg5pyhKsAm~ZfhTmr-5OF7HRmREr65XszlCPeXxVakc8JXakxmmWYL-WGsoYL1xkk-A2s28bQDdMYKgwR7oqJspBh8NEk44VA-KgryX1i6VNjUgKrqQ23G6Frx6FBiXjuVCSVpfhQng__" alt="error" />
          </div>
          <div className="d-flex category">
            <h5 className='mt-2 ml-3'>🗓️ Meetup</h5>
          </div>
          <div className="heading d-flex justify-content-between">
            <h3 className='mt-1 ml-3 topic'>Finance & Investment Elite Social Mixer @Lujiazui</h3>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                <i class="fa-solid fa-ellipsis"></i>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div className="d-flex details mt-3 fw-bold">
            <p className='ml'><i class="fa-solid fa-calendar-day"></i> Fri, 12 Oct, 2018</p>
            <p className='ml loc'><i class="fa-solid fa-location-dot"></i> Ahmedabad, India</p>
          </div>
          <div className="button">
            <button className='btn btn-outline-danger button mb-3'>Visit Website</button>
          </div>
          <div className="acc mt-3 d-flex align-items-end justify-content-between">
            <div className="account d-flex align-items-end">
              <img width="48" height="48" className='rounded-circle' src="https://s3-alpha-sig.figma.com/img/b8a9/097f/c3ac7682e52df2e10d0a36ec3f243a44?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ng0VDYcSvtV1A57wBDN4-DuJAwroU49mCLRKwrWstF5SsOhJBYqwqikGVs7TS5nVFvmFXiCmc3eLB2NpVjWbKKY5i8pkNpxPOGWHjMGwPVNAGg8EncxQ9E6xafnTbpe7xp~jBa~0X8DGMC5DGFizAWLCgm-6TGLWS3iBV1iL8pD~n09gAiKOCNmggoWRL0KqCuY4pQcEk6aKAw6GVA1NhzKrsB2yGHX7T-KzHeQE-M71KEgHzIcjRTjo8uHytniC-UXKoIiA5isBV0o-H6CZZogHogTqA8948OeoVlOK8rAJ1~iyAwb-fnLX2hYsdqNjVO1c9E1HMPVq2e6cZ~tAWw__" alt="error" />
              <p className='ml fw-bold'>Ronal Jones</p>
            </div>
            <div className="d-flex justify-content-around view">
              <span className='d-flex'><i class="fa-regular fa-eye mx-2"></i></span>
              <p className='d-flex'>1.4k views</p>
            </div>
            <div className="d-flex align-items-center share">
              <span className='d-flex'><i class="fa-solid fa-share-nodes"></i></span>
            </div>
          </div>

          <div className="d-flex category mt-4">
            <h5 className='mt-2 ml-3'>💼️ Job</h5>
          </div>
          <div className="heading d-flex justify-content-between">
            <h3 className='mt-1 ml-3 topic'>Software Developer</h3>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                <i class="fa-solid fa-ellipsis"></i>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div className="d-flex details mt-3 fw-bold">
            <p className='ml'><i class="fa-solid fa-bag-shopping"></i> Innovaccer Analytics Private Ltd.</p>
            <p className='ml loc'><i class="fa-solid fa-location-dot"></i> Noida, India</p>
          </div>
          <div className="button">
            <button className='btn btn-outline-success button mb-3'>Apply on Timesjobs</button>
          </div>
          <div className="acc mt-3 d-flex align-items-end justify-content-between">
            <div className="account d-flex align-items-end">
              <img width="48" height="48" className='rounded-circle' src="https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kjKCnjPcFg1HH~hdRR11kTiMj~Kjl6MTH3a2ErcsPp5tYPnlGWTTg251zbytSxPVYTC9SintIDgXfp8R4dmYoj5-bgsUjWUbSBrZg73DbJcV21ja5yZf5KIvDdeMgzhmAJrW4JhZydkUisP71LXPqux7JaSWCKkL-8Dl3PO6wcWloi5q8JPLP7B58P1zMBLXDG6YPsI9DKNqt3wvX~u~TBQSZohBijFJEbf8WTz~cA-aN1voGw~Bu6CTCGzmRe~btlT8xxAII-9BLDxf1Is7zthfUplTj26r4XfmMeAINFd-PybfNQybCBJ69WuPZ3Oeop7lRSc9L5kfcM8Txp-9ww__" alt="error" />
              <p className='ml fw-bold'>Joseph Gray</p>
            </div>
            <div className="d-flex justify-content-around view">
              <span className='d-flex'><i class="fa-regular fa-eye mx-2"></i></span>
              <p className='d-flex'>1.4k views</p>
            </div>
            <div className="d-flex align-items-center share">
              <span className='d-flex'><i class="fa-solid fa-share-nodes"></i></span>
            </div>
          </div>
        </div>

        <div className="location d-none d-lg-flex flex-column mt-5 loc-space">
          <div className="current d-flex justify-content-between">
            <span className='curr-loc'><i class="fa-solid fa-location-dot"></i> Noida, India</span>
            <div className="btn pen mr"><i class="fa-solid fa-pen"></i></div>
          </div>
          <div className="warning mt-3">
            <span><i class="fa-solid fa-circle-exclamation"></i> Your location will help us serve better and extend a personalised experience.</span>
          </div>

          <div className="recommendation d-flex flex-column mt-5">
            <div className="rec-text d-flex"><i class="fa-solid fa-thumbs-up"></i> <p className='ml'> RECOMMENDED GROUPS</p></div>
            
            <div className="acc mt-3 d-flex align-items-end justify-content-between">
              <div className="account d-flex align-items-end">
                <img width="36" height="36" className='rounded-circle' src="https://s3-alpha-sig.figma.com/img/bb0d/5f13/7ffa8afe7647578af2381ac9090c32e2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oZXe5VGb3a75kJfwPhyPTAnE6zN6e-0tO7XU3Qu1vvW5bg6EDhnl1jsamSEjhYsFkRTLQR-VFthvX-XhOQ9fhoXzjEGdnOYXdQ4kreL5wy1sN~oRu~Mgcln7ZvRR4YOw1qD5EkZuU6fi2Q4nsJVf4G6mcHywQNbH0RZV2yddFLRv2ZUQoJ3HcUtd9VeOESj-zV~zBV1zkg99TbfOPCqW1hJhsKxi4udbIfarrsi9AXxkzsGEAofmxh~SBKCfo7eDb2CGmIeU5mJ-AnxiFyuiZuXtu~eXmbYyWGXH6qqTqEuiB922WZ8YgzLfgNX1cCsXYRurouRVtf~G2pDCHvVtSQ__" alt="error" />
                <p className='f-name ml '>Leisure</p>
                {!follow?<button className='btn f-btn' onClick={handleFollow}>Follow</button>:
                <button className='btn btn-dark f-btn' onClick={handleFollow}>Followed</button>}
              </div>
            </div>

            <div className="acc mt-3 d-flex align-items-end justify-content-between">
              <div className="account d-flex align-items-end">
                <img width="36" height="36" className='rounded-circle' src="https://s3-alpha-sig.figma.com/img/bcef/452c/f2f96211f57819f3ef6b3922e0cd72cf?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kLUSAdd-~IwRNVaztr0k7RdyGTUBNdUJdiP61CvGzTpqYNeY1WGjOCH5JUwet2WVhtcV8VHUxtazRTPiugEpFlU7oK6DXwHeiUM6eTBDJYpWP6~6WOBA9J2ikLiv78kkQ~1-7hLCcphiWKFyPPC9ydkYfJ~o8GbL6K5nekmJpY5HDW3HUNohOgK55mOC2fsTBBeXQZE09ESpkjs1GA0j9xq5Ls3bWch~hk86hL1NPqVwzcT-GuZZiYo4KroXS5P3fdVLUITUAJD3hkuQWK1pKu3Vx5BEOH4eXn49mGXDNjubFzIlHU0dqvprlfRfG8NRQONScf5fbrYJ3pUb5E8cxw__" alt="error" />
                <p className='f-name ml '>Activism</p>
                {!follow1?<button className='btn f-btn' onClick={handleFollow1}>Follow</button>:
                <button className='btn btn-dark f-btn' onClick={handleFollow1}>Followed</button>}
              </div>
            </div>

            <div className="acc mt-3 d-flex align-items-end justify-content-between">
              <div className="account d-flex align-items-end">
                <img width="36" height="36" className='rounded-circle' src="https://s3-alpha-sig.figma.com/img/8f0b/0ff9/829dac10d09fc377df6ec78c4098bc9a?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kZEbI0wrZVw01csJyD5NJmkp8H-2hP7br1kGN41cFmNQeAonQDAsn5csCEhPOwHC0VscNDuhePZUo3npNMOZQVpjazBCbVk~zbxwG2TsPBxQmWBGoUtbC2dnFnObvm-etqk7tjMQA6KdjAtoqoREDUxuihd61B39AsVDWSUWoZTICCj5RFzTNLMOKiaavl6aBSD-fPF3-am9XfWutYox9t1P1H7i4Bs67sVVi6MBN6F0Hk7SBMU03tvwRT79wkQZHrsuHUtqNYQ-xN9oCF2Cpczo-Wya59ZUDLkXKaME5CD07EZt2V2030rsBuZpjm0EhKfpIA3f-glJpNFDpsRV3w__" alt="error" />
                <p className='f-name ml '>MBA</p>
                {!follow2?<button className='btn f-btn' onClick={handleFollow2}>Follow</button>:
                <button className='btn btn-dark f-btn' onClick={handleFollow2}>Followed</button>}
              </div>
            </div>

            <div className="acc mt-3 d-flex align-items-end justify-content-between">
              <div className="account d-flex align-items-end">
                <img width="36" height="36" className='rounded-circle' src="https://s3-alpha-sig.figma.com/img/0533/15a9/cf46af0ebdaae2ffbbb5718726788a19?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kT3UCifYZxw56VoxGNq0pQEC4atGaQy-QHnHeEZ5PiZOuxqNkIEzgn7ICyFa0tVR~g7xeMlzF8vK69yQ56yA3PNMIdWOupjp2w8U87lhDAM22ieL5vQ2gvs5l8ajULFmtAEA0RB335nk2LeRhhX1MSv20S9IlQOM5qzrdAKsRO6qCY7tanjrSoCE9BAOUCYPu8gzIn1OekTSaNiVTdsUUDbA3WfUPjp~B~TCVljkNWy9MZZZunQ-BkhQmDzWa3iBCKbP909Hx1IeRjkjCuD273CK61gX-RU5MpIHOB2CND1kk2TflzgqR9lXEd-Y2sge5CEPz6EGcdXojOrDDKwSew__" alt="error" />
                <p className='f-name ml '>Philosophy</p>
                {!follow3?<button className='btn f-btn' onClick={handleFollow3}>Follow</button>:
                <button className='btn btn-dark f-btn' onClick={handleFollow3}>Followed</button>}
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="pencil d-flex d-lg-none container justify-content-end mb-3 sticky-bottom">
        <button className='create-write-post rounded-circle '><img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/image/edit_24px'%3e%3cpath%20id='icon/image/edit_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.6588%203C17.4088%203%2017.1488%203.1%2016.9588%203.29L15.1288%205.12L18.8788%208.87L20.7088%207.04C21.0988%206.65%2021.0988%206.02%2020.7088%205.63L18.3688%203.29C18.1688%203.09%2017.9188%203%2017.6588%203ZM14.0588%209.02L14.9788%209.94L5.91878%2019H4.99878V18.08L14.0588%209.02ZM2.99878%2017.25L14.0588%206.19L17.8088%209.94L6.74878%2021H2.99878V17.25Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e" alt="" height="24" width="24" /></button>
      </div>


      </>
  )
}
