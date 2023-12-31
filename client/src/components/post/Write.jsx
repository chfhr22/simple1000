import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import Image from './Image';

const Write = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    let navigate = useNavigate();

    const onSubmit = (e) => {
      e.preventDefault();

      if (title === "" || content === "") {
          return alert("제목 또는 내용을 채주요!");
      }

      let body = {
          title: title,
          content: content,
          image: image
      }

      axios
          .post("/api/post/write", body)
          .then((resopnse) => {
              if (resopnse.data.success) {
                  alert("글 작성이 완료되었습니다.");
                  navigate("/list");
              } else {
                  alert("글 작성이 실패하였습니다.")
              }
          })
    }

    return (
    <div id='login__wrap'>
        <div className='login__bg'>
            <div className='login__bg__text'>Write</div>
        </div>
        <form action="" className='login__form'>
            <fieldset>
                <legend className='blind'>글 작성</legend>
                <div className='login__id'>
                    <label htmlFor="youId" className='blind'>제목</label>
                    <input
                    type='text'
                    id="title"
                    value={title}
                    placeholder='제목'
                    onChange={(e) => {
                        setTitle(e.currentTarget.value);
                    }}
                ></input>
                </div>
                <div className='login__pass'>
                    <label htmlFor="youPass" className='blind'>내용</label>
                    <textarea
                        className="youPass"
                        value={content}
                        placeholder='내용'
                        onChange={(e) => {
                            setContent(e.currentTarget.value);
                        }}
                    >
                    </textarea>
                </div>
                <Image setImage={setImage} />
                <button className='login__btn' type='submit' onClick={(e) => {
                  onSubmit(e);
                }}>글쓰기</button>
            </fieldset>
        </form>
    </div>
  )
}

export default Write