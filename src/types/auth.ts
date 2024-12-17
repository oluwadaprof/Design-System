export type SignupFormInputs = {
  firstname: string
  lastname: string
  email: string
  password: string
}

export type WorkspaceFormInputs = {
  name: string
  teamSize: string
  country: string
  logo: string
}

export type InviteTeamForm = {
  email: string
  role: string
}
