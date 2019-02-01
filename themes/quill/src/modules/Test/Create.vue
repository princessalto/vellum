<template :dark="$store.getters['app/app'].dark">
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>

          <v-toolbar flat class="wer transparent">
            <v-toolbar-title class="primary--text">
              <strong>{{ __('Account Settings') }}</strong>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat deppress round class="emphasis--medium">
              <v-icon left color="grey">mdi-lifebuoy</v-icon>
              <span class="grey--text">Contact Support</span>
            </v-btn>
          </v-toolbar>

          <v-card class="pb-5 mb-3">
            <v-toolbar flat class="transparent">
              <h4 class="grey--text">My Profile</h4>
              <v-spacer></v-spacer>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-toolbar>

            <v-layout row wrap>
              <v-flex md3>
                <div class="text-xs-center">
                  <div>
                    <v-avatar class="mb-3" size="120">
                      <img src="https://images.unsplash.com/photo-1538409714174-4a382cff489f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ae32ac7d422ce23060ae287e07918c9&auto=format&fit=crop&w=500&q=60" alt="">
                    </v-avatar>
                  </div>

                  <v-btn icon outline color="primary">
                    <v-icon small>refresh</v-icon>
                  </v-btn>

                  <v-btn icon outline color="primary">
                    <v-icon small>close</v-icon>
                  </v-btn>
                </div>
              </v-flex>
              <v-flex md9>
                <v-card flat>
                  <v-card-text>
                    <h4 class="mb-3 grey--text">General Information</h4>

                    <v-layout row wrap>
                      <v-flex md3>
                        <v-text-field
                          label="Last Name"
                          outline
                        ></v-text-field>
                      </v-flex>
                      <v-flex md3>
                        <v-text-field
                          label="First Name"
                          outline
                        ></v-text-field>
                      </v-flex>
                    </v-layout>

                    <v-layout row wrap>
                      <v-flex md3>
                        <v-text-field
                          label="Email Address"
                          append-icon="mdi-at"
                          outline
                        ></v-text-field>
                      </v-flex>
                      <v-flex md3>
                        <v-btn flat color="secondary">
                          Change Email Address
                        </v-btn>
                      </v-flex>
                    </v-layout>

                    <v-divider></v-divider>

                    <h4 class="my-3 grey--text">Change Password</h4>
                    <v-layout row wrap>
                      <v-flex md3>
                        <v-text-field
                          label="Current Password"
                          outline
                          type="password"
                        ></v-text-field>
                      </v-flex>
                      <v-flex md3>
                        <v-text-field
                          label="New Password"
                          outline
                          type="password"
                        ></v-text-field>
                      </v-flex>
                      <v-flex md3>
                        <v-text-field
                          label="Confirm Password"
                          outline
                          type="password"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-btn dark large class="secondary" depressed>Submit</v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>

          <v-card class="mb-3">
            <v-toolbar flat class="transparent">
              <h4 class="grey--text">Account Information</h4>
              <v-spacer></v-spacer>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-toolbar>
          </v-card>

          <v-card class="mb-3">
            <v-toolbar flat class="transparent">
              <h4 class="grey--text">Background Details</h4>
              <v-spacer></v-spacer>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-toolbar>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<style>
  .wer .v-toolbar__content {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
</style>

<script>
// import CurrentCourseProgress from '@/modules/Yggdrasil/Course/widgets/Student/CurrentCourseProgress.vue'
// import ToDo from '@/modules/Yggdrasil/Course/widgets/Student/ToDo.vue'
// import MyStudents from '@/modules/Yggdrasil/Course/widgets/Trainer/MyStudents.vue'
// import MyMostPopularCourses from '@/modules/Yggdrasil/Course/widgets/Trainer/MyMostPopularCourses.vue'
// import Responses from '@/modules/Submission/Responses.vue'
// import SingleResponse from '@/modules/Submission/SingleResponse.vue'
// import SingleResponseChart from '@/modules/Submission/SingleResponseChart.vue'

export default {

  components: {
    // CurrentCourseProgress,
    // MyMostPopularCourses,
    // MyStudents,
    // ToDo,
    // Responses,
    // SingleResponse,
    // SingleResponseChart,
  },

  data () {
    return {
    }
  }
}
</script>
