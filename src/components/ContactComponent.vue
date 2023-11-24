<template>
  <div class="wrapper" id="Contact">
    <div class="container contact">
      <h1>Contact Me</h1>
      <div class="contact_wrap">
        <div class="contact_info">
          <div class="info_box">
            <div class="info_box_left">
              <font-awesome-icon :icon="['fas', 'phone']" />
            </div>
            <div class="info_box_right">
              <div>Phone</div>
              <div>010-4058-7932</div>
            </div>
          </div>
          <div class="info_box">
            <div class="info_box_left">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </div>
            <div class="info_box_right">
              <div>Email</div>
              <div>shoo038@gachon.ac.kr</div>
            </div>
          </div>
        </div>
        <form class="contact_mail" @submit.prevent="sendEmail">
          <div class="mail_top">
            <div class="contact_box">
              <label for="name">Name</label>
              <input id="name" class="mail_input" v-model="form.user_name" />
            </div>
            <div class="contact_box">
              <label for="email">Email</label>
              <input id="email" class="mail_input" v-model="form.user_email" />
            </div>
          </div>
          <div class="mail_bottom">
            <label>Message</label>
            <textarea v-model="form.message" />
          </div>
          <div class="mail_btn">
            <button type="submit" value="send">
              send_
              <font-awesome-icon :icon="['fas', 'paper-plane']"></font-awesome-icon>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import emailjs from 'emailjs-com'

library.add(faPhone, faEnvelope, faPaperPlane)

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      form: {
        user_name: '',
        user_email: '',
        message: ''
      }
    }
  },
  methods: {
    sendEmail() {
      emailjs
        .send('service_abdd2l9', 'template_ghd7bzi', this.form, 'R0pMlGk7BwjBNde_-')
        .then(
          result => {
            alert('메일을 전송하였습니다.')
            console.log(result.text)
          },
          error => {
            alert('메일 전송에 실패하였습니다.')
            console.log(error.text)
          }
        )
    }
  }
}
</script>

<style>
/* contact */
.contact {
  width: 80%;
}

.contact h1 {
  font-size: var(--font-size-L);
  margin-bottom: var(--title-margin);
  text-align: center;
}

.contact .contact_info {
  width: 30%;
}

.contact .info_box {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}

.contact .info_box_left {
  font-size: 35px;
  color: var(--purple);
}

.contact .info_box_right {
  margin-left: 15px;
}

.contact .info_box_right>div:first-child {
  font-weight: bold;
  font-size: 18px;
  color: var(--purple);
}

.contact .info_box_right>div:last-child {
  color: var(--font-color);
  margin-top: 10px;
}

.contact_wrap {
  display: flex;
  flex-grow: 1;
}

.contact .contact_mail {
  flex-grow: 1;
}

.contact_mail .mail_top {
  display: flex;
  justify-content: space-between;
}

.contact_mail .contact_box {
  box-sizing: border-box;
  position: relative;
  width: 45%;
}

.contact_mail .contact_box input {
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  border: 1.5px solid var(--purple) !important;
  border-radius: 5px;
  line-height: 1.45;
  letter-spacing: 0.04rem;
  padding: 0px 15px;
  background-color: var(--body_background);
  color: var(--font-color);
}

.contact_mail .contact_box label,
.contact_mail .mail_bottom label {
  display: inline-block;
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: var(--body_background);
  padding: 0px 5px;
  color: var(--purple);
  font-weight: bold;
}

.contact_mail .mail_bottom {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  margin-top: 20px;
}

.contact_mail .mail_bottom textarea {
  border: 1.5px solid var(--purple) !important;
  border-radius: 5px;
  outline: none;
  padding: 15px;
  width: 100%;
  height: 300px;
  background-color: var(--body_background);
  color: var(--font-color);
}

.contact_mail .mail_btn {
  width: 100%;
  text-align: end;
  margin-top: 20px;
}

.contact_mail .mail_btn button {
  background-color: var(--purple);
  border: none;
  border-radius: 5px;
  color: white;
  padding: 5px 15px;
  cursor: pointer;
}
</style>