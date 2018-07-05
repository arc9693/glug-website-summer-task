<template lang="html">
  <v-layout
    d-flex
    wrap
    class="contact">
    <v-flex
      xs12
      lg6
      class="contact-form">
      <div
        class="images"
        style="margin-top:70px;">
        <img
          src="../assets/images/icon(1).png"
          alt=""
          style="height:20vh" >
      </div>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="acform" >
        <h1 class="headingF bleh">Get in touch</h1>
        <v-text-field
          v-model="name"
          :rules="nameRules"
          :counter="15"
          label="Name"
          required
        />
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        />
        <v-text-field
          v-model="message"
          :rules="messageRules"
          label="Message"
          multi-line
          required
        />

        <v-btn
          :disabled="!valid"
          @click="submit"
        ><i class="fab fa-lg fa-telegram-plane"/> Send
        </v-btn>
        <v-btn @click="clear"><i class="fas fa-lg fa-broom"/>clear</v-btn>
      </v-form>
    </v-flex>
    <v-flex
      xs12
      lg6
      class="contact-info">
      <div class="inner">
        <div
          v-for="(contact,index) in contacts"
          :key="index"
          class="cardi">
          <i class="far fa-address-card fa-lg"/><span> {{ contact.name }}</span >({{ contact.post }})<br>
          Phone:{{ contact.phone }}<br>Mail:{{ contact.email }}
        </div>

      </div>
    </v-flex>

  </v-layout>

</template>

<script src='../assets/scripts/contact-us.js'>

</script>

<style lang="css" scoped>

@import '../assets/css/contact-us.css';
</style>
