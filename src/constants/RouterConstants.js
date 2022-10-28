export const RoutesConts = {
    SIGNUP: '/',
    LOGIN: '/mitra/login',
    HOME: '/mitra/home',
    JOBS: '/mitra/jobs',
    JOBS_STATUS: '/mitra/jobsStatus',
    REFERRAL: '/mitra/referral',
    PROFILE: '/mitra/profile',
};


export const stacks = {
    HOME: 'home',
    LOGIN: 'login',
    HOME: 'home',
    JOBS: 'jobs',
    JOBS_STATUS: 'status',
    REFERRAL: 'referral',
    PROFILE: 'profile'
};

export const routeMap = {
    [RoutesConts.LOGIN]: {
      pathname: RoutesConts.LOGIN,
      stack: stacks.LOGIN
    },
    [RoutesConts.HOME]: {
      pathname: RoutesConts.HOME,
      stack: stacks.HOME
    },
    [RoutesConts.JOBS]: {
      pathname: RoutesConts.JOBS,
      stack: stacks.JOBS
    },
    [RoutesConts.JOBS_STATUS]: {
      pathname: RoutesConts.JOBS_STATUS,
      stack: stacks.JOBS_STATUS
    },
  [RoutesConts.REFERRAL]: {
    pathname: RoutesConts.REFERRAL,
    stack: stacks.REFERRAL
  },
  [RoutesConts.PROFILE]: {
    pathname: RoutesConts.PROFILE,
    stack: stacks.PROFILE
  }

};

export const MITRA_APP_BACKEND = {
  HOST: 'http://localhost:5000',
  REGISTER_USER: '/register/user',
  SEND_OTP : '/send/opt',
  LOGIN_USER : '/login/user',
  SESSION_STATUS : '/get/session'

}
