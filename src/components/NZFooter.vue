<template>
  <div id="nz-footer">
    
    <v-footer  flat style="background: #065992">
    <v-row class="flex-column flex-sm-row justify-center" no-gutters cols="12" sm="12" md="8" lg="9" xl="9">
     <v-col cols="6"  >
         <v-layout column  class="pa-8 mb-n1" > 

         <img alt="avatar" v-bind:width="logoSize" src="/static/img/nzvlogo.svg" />
      
         </v-layout>
         
         
         
     <v-col class="text-center white--text" cols="12">
         <v-layout >
        <v-btn
           
           class="mr-10 mt-n3 ml-6 white--text "
           icon
           href="https://gtv.org/"
           target="_blank"
        >
          <v-icon>icon-gtv</v-icon>
        </v-btn>

        <v-btn
           class="ml-5 mt-n3  white--text"
           icon
           href="https://gnews.org/"
           target="_blank"
        >
          <v-icon>icon-gnews</v-icon>
        </v-btn>
         </v-layout>
     </v-col>
     
      
           
       <v-col class="text-Subtitle1 text-center white--text" cols="12">
        <v-layout class="ml-5 ">
          <strong class="mt-2">Follow Us : </strong>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-2 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-layout>
       </v-col>
       
        <v-col class="ml-5 text-caption  white--text" cols="12">
          Copyright &copy;  {{ new Date().getFullYear() }}
          <strong>NZ Voice. </strong> All rights reserved. 
          <b class="text-decoration-underline">
           Privacy Policy
          </b>
        </v-col>
   
     </v-col> 
   </v-row>
     <!-- <v-row class=" ml-n3white--text flex-column flex-sm-row " no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-5"
      >
        {{ link }}
      </v-btn>
    </v-row> -->
   <!-- <v-row class=" ml-n5 white--text flex-column flex-sm-row " no-gutters>
        <v-btn text rounded class="my-2 white--text" to="/about-us">Home</v-btn>
        <v-btn text rounded class="my-2 white--text" to="/news">News</v-btn>
        <v-btn text rounded class="my-2 white--text" to="/shows">shows</v-btn>
        <v-btn text rounded class="my-2 white--text" to="/videos">Videos</v-btn>
      </v-row>
     -->
    
     <v-row class="flex-column flex-sm-row justify-center ml-10" no-gutters >
      <v-layout > 
     <v-list
       
        two-line
        subheader
        style="background: #065992"
      >
      
        <v-list-item >
          <v-list-item-content >
            <v-list-item-title class="white--text">Home</v-list-item-title><br><br>

            <v-list-item-subtitle class="white--text">About us</v-list-item-subtitle><br><br>
            <v-list-item-subtitle class="white--text">Contact us</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      

     </v-list>
      <v-list
       
        two-line
        subheader
        style="background: #065992"
      >
      
        <v-list-item >
          <v-list-item-content >
            <v-list-item-title class="white--text">News</v-list-item-title><br><br>

            <v-list-item-subtitle class="white--text">About us</v-list-item-subtitle><br><br>
            <v-list-item-subtitle class="white--text">Contact us</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      

     </v-list>
      
    
  <v-list
       
        two-line
        subheader
        style="background: #065992"
      >
      
        <v-list-item >
          <v-list-item-content >
            <v-list-item-title class="white--text">Shows</v-list-item-title><br><br>

            <v-list-item-subtitle class="white--text">About us</v-list-item-subtitle><br><br>
            <v-list-item-subtitle class="white--text">Contact us</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      

     </v-list>
     
     <v-list
       
        two-line
        subheader
        style="background: #065992"
      >
      
        <v-list-item >
          <v-list-item-content >
            <v-list-item-title class="white--text">Videos</v-list-item-title><br><br>

            <v-list-item-subtitle class="white--text">About us</v-list-item-subtitle><br><br>
            <v-list-item-subtitle class="white--text">Contact us</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      

     </v-list>
      </v-layout>
      
     </v-row>
  
    </v-footer>
   
  </div>
</template>

<script>
export default {
  name: "nz-footer",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
      'mdi-email',
    ],
    links: [
        'Home',
        'News',
        'Shows',
        'Videos',
        
      ],
  }),
  
};
</script>