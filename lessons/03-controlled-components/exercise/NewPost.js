import React, { useState } from "react"
import { useAppState } from "app/app-state"
import Avatar from "app/Avatar"
import Minutes from "app/Minutes"
import { FaDumbbell } from "react-icons/fa"
import RecentPostsDropdown from "app/RecentPostsDropdown"

const errorClass = "NewPost_error"

const MAX_MESSAGE_LENGTH = 5

export default function NewPost({ takeFocus, date, onSuccess, showAvatar }) {
  const [{ auth }] = useAppState()
  const [message, setMessage] = useState("What did you do")

  return (
    <div className="NewPost">
      {showAvatar && <Avatar uid={auth.uid} size={70} />}
      <form className="NewPost_form">
        <textarea
          className="NewPost_input"
          placeholder="Tell us about your workout!"
          value={message}
          onChange={e => {
            setMessage(e.target.value)
          }}
        />
        <div className="NewPost_char_count">
          {message.length}/{MAX_MESSAGE_LENGTH}
        </div>
        <RecentPostsDropdown
          uid={auth.uid}
          onSelect={message => {
            setMessage(message)
          }}
        />
        <div className="NewPost_buttons">
          <Minutes date={date} />
          <div>
            <button type="submit" className="icon_button cta">
              <FaDumbbell /> <span>Post</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
