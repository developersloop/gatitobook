import { AbstractControl, FormGroup } from "@angular/forms";

type LowerCase = (args: AbstractControl) => Object

const toLowerCase: LowerCase = (el: AbstractControl): Object => {
  if (el?.value !== el?.value.toLowerCase()) {
    return {
      lowerCase: true
    }
  } else return false
}

const equalsPasswordAndUsername: (formGroup: FormGroup) => Object | null = (formGroup: FormGroup) => {

  const username: string | null = formGroup.get('userName')?.value ?? null
  const password: string | null = formGroup.get('password')?.value ?? null

  if (username && password) {
    if (username !== password) return null
    else {
      return {
        equalsPassword: true
      }
    }
  }
  else return null
}

export default {
  toLowerCase,
  equalsPasswordAndUsername,
}
