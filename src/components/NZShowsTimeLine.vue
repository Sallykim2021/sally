<template>
  <v-card tile id="nz-shows-time-line" elevation="0" fill-height>
    <v-card-title class="pa-0">
      <v-col cols="5" class="px-1 py-0 text-h5 d-block"
        >SHOW
        <div class="font-weight-bold">SCHEDULE</div>
      </v-col>
      <v-divider vertical inset color="#ce982f" style="border-width: 1.5px"></v-divider>
      <v-col class=" ">
        <v-col class="px-0 py-0 text-subtitle-2">
          Your TimeZone: <span style="color: #ce982f">GMT+10</span>
        </v-col>
        <v-col class="px-0 py-0 text-caption">Australian Eastern Standard Time </v-col>
      </v-col>
    </v-card-title>

    <v-expansion-panels
      elevation="0"
      v-model="panels"
      hover
      accordion
      mandatory
      tile
      focusable
    >
      <v-expansion-panel elevation="0" v-for="(group, i) in options.eventsgroup" :key="i">
        <v-expansion-panel-header
          class="ma-0 py-0 font-weight-bold"
          elevation="0"
          :color="i == panels ? '#8f3455' : ''"
          :class="i == panels ? 'white--text' : ''"
        >
          <template v-slot:default>
            <v-row no-gutters>
              <v-col cols="4" class="text-left text-uppercase">
                {{ getWeekName(group.date) }}
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4" class="text-right">
                {{ group.date }}
              </v-col>
            </v-row>
          </template>
        </v-expansion-panel-header>

        <v-expansion-panel-content elevation="0" class="pa-0">
          <v-timeline elevation="0" dense>
            <div v-for="(event, i) in group.events" :key="i">
              <v-timeline-item
                right
                color="grey lighten-3"
                icon-color="#ce982f"
                icon="icon-time"
              >
                <v-row fill-height>
                  <v-col cols="3" class="px-0 text-body-2"> {{ event.time }} </v-col>
                  <v-col cols="9" class="pl-1 text-body-2 headerClass">
                    {{ event.title }}
                  </v-col>
                </v-row>
              </v-timeline-item>
            </div>
          </v-timeline>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
// import axios from "axios";

export default {
  name: "nz-shows-time-line",
  components: {},
  data() {
    return {
      panels: [],
    };
  },
  props: {
    options: {
      type: Object,
      default() {
        return {
          eventsgroup: [
            {
              date: "2021-05-20",
              events: [
                {
                  time: "15:26 PM",
                  title:
                    "Event title.This order was archived.XXXXXXXXXXXXXXXXXXXXXXXXXXX",
                },
                {
                  time: "15:26 PM",
                  title:
                    "Event title.This order was archived.XXXXXXXXXXXXXXXXXXXXXXXXXXX",
                },
                {
                  time: "15:26 PM",
                  title:
                    "Event title.This order was archived.XXXXXXXXXXXXXXXXXXXXXXXXXXX",
                },
                {
                  time: "15:26 PM",
                  title:
                    "Event title.This order was archived.XXXXXXXXXXXXXXXXXXXXXXXXXXX",
                },
              ],
            },
            {
              date: "2021-05-19",
              events: [
                {
                  time: "15:26 PM",
                  title:
                    "Event title.This order was archived.XXXXXXXXXXXXXXXXXXXXXXXXXXX",
                },
                {
                  time: "15:26 PM",
                  title:
                    "Event title.This order was archived.XXXXXXXXXXXXXXXXXXXXXXXXXXX",
                },
                {
                  time: "15:26 PM",
                  title:
                    "Event title.This order was archived.XXXXXXXXXXXXXXXXXXXXXXXXXXX",
                },
                {
                  time: "15:26 PM",
                  title:
                    "Event title.This order was archived.XXXXXXXXXXXXXXXXXXXXXXXXXXX",
                },
              ],
            },
            {
              date: "2021-05-18",
              events: [
                {
                  time: "15:26 PM",
                  title:
                    "Event title.This order was archived.XXXXXXXXXXXXXXXXXXXXXXXXXXX",
                },
                {
                  time: "15:26 PM",
                  title:
                    "Event title.This order was archived.XXXXXXXXXXXXXXXXXXXXXXXXXXX",
                },
                {
                  time: "15:26 PM",
                  title:
                    "Event title.This order was archived.XXXXXXXXXXXXXXXXXXXXXXXXXXX",
                },
                {
                  time: "15:26 PM",
                  title:
                    "Event title.This order was archived.XXXXXXXXXXXXXXXXXXXXXXXXXXX",
                },
              ],
            },
          ],
        };
      },
    },
  },
  mounted() {
    // this.getPages();
  },
  methods: {
    // getPages() {
    //   axios({
    //     method: "get",
    //     url: "/api/v2/pages/?slug=shows&fields=*&type=home.ShowsPage",
    //     auth: {
    //       username: "admin",
    //       password: "admin",
    //     },
    //   }).then((response) => (this.newstv = response.data.items[0]));
    // },
    getNow: function () {
      const today = new Date();
      const d =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
      // const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = d;
      this.timestamp = dateTime;
      return d;
    },
    getWeekName: function (someday) {
      const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const d = new Date(someday);
      const widx = d.getDay();
      return weekdays[widx];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerClass {
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
