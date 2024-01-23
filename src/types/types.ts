export interface Brew {
  user: Number,
  buid: Number,
  sync: Boolean,
  steps: StepDetail[],
  roaster?: String,
  banneruri?: String,
}

export interface StepDetail {
  image: String,
  detail: String,
  time?: Date,
}

