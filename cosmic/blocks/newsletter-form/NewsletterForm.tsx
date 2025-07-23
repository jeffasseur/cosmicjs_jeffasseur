"use client"

import { useState } from "react"
import { CheckCircle, Loader2, XCircle } from "lucide-react"
import { cn } from "@/cosmic/utils"

import { Button } from "@/cosmic/elements/Button"
import { Input } from "@/cosmic/elements/Input"
import { Label } from "@/cosmic/elements/Label"
import {
  addSubmission,
  AddSubmissionType,
} from "@/cosmic/blocks/newsletter-form/actions"

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [sumbitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  async function handleSubmitComment(e: React.SyntheticEvent) {
    setError(false)
    setSubmitting(true)

    const newSubmission: AddSubmissionType = {
      type: "newsletter-submissions",
      title: "Newsletter Subscription",
      metadata: {
        email,
      },
    };
    try {
      const res = await addSubmission(newSubmission)
      if (!res.object) {
        setSubmitting(false)
        setError(true)
        return
      } else {
        setSubmitting(false)
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setEmail("")
        }, 3000)
      }
    } catch (err) {
      setSubmitting(false)
      setError(true)
      return
    }
  }
  function handleChangeEmail(e: React.SyntheticEvent) {
    const target = e.target as HTMLInputElement
    setEmail(target.value)
  }
  return (
    <div className={cn("mb-8", className)}>
      {error && (
        <div className="mb-4 flex rounded-xl border border-red-500 p-8">
          <XCircle className="relative top-1 mr-4 h-4 w-4 shrink-0 text-red-500" />
          There was an error with your request. Make sure all fields are valid.
        </div>
      )}
      {sumbitted ? (
        <div className="flex rounded-xl border border-green-500 p-8">
          <CheckCircle className="relative top-1 mr-4 h-4 w-4 shrink-0 text-green-500" />
          Message submitted.
        </div>
      ) : (
        <>
          <div className="mb-4">
            <Label htmlFor="email">Your email *</Label>
            <Input
              id="email"
              placeholder="Email"
              onChange={handleChangeEmail}
              value={email}
              className="mt-2 text-dark"
            />
          </div>
          <div>
            <Button
              onClick={handleSubmitComment}
              type="submit"
              disabled={submitting}
              className="btn border-none mt-2"
              size="lg"
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  🚀 Sending...
                </>
              ) : (
                `Keep me updated!`
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
