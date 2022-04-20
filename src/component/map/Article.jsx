import React, { useRef, useState } from 'react'

export default function Article({article}) {
    const [show,setShow]=useState(false);
    const articleRef=useRef()
    function showArticle() {
        if(!show){
            articleRef.current.style.maxHeight=articleRef.current.scrollHeight + 'px';
            articleRef.current.scrollIntoView(true);
            setShow(true)
        }else{
            articleRef.current.style.maxHeight=0;
            setShow(false)
        }
    }
    // const showclass=show?"show-class":"article"
  return (
    <div>
        <button type="button" className="btn btn-info p-2" onClick={showArticle}>بیشتر بخوانید</button>
        <p ref={articleRef} className="article border">{article}</p>
    </div>
  )
}
