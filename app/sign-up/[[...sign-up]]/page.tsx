import React from 'react'
import { SignUp } from "@clerk/nextjs";

type Props = {}

export default function page({}: Props) {
  return (
    <div><SignUp /></div>
  )
}