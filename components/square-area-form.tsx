"use client"

import { useState } from "react"
import { useForm } from "@tanstack/react-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    panjangRusuk: z
        .number("Side must be a number.")
        .positive("Side must be greater than 0."),
})

export function SquareAreaForm() {
    const [areaResult, setAreaResult] = useState<number | null>(null);
    const form = useForm({
        defaultValues: {
            panjangRusuk: 0,
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            try {
                const response = await fetch("/api/square-area", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ panjangRusuk: value.panjangRusuk }),
                })
                const data = await response.json()
                setAreaResult(data.luas)
            } catch (error: any) {
                throw new Error(`Failed to calculate area: ${error.message}`)
            }
        },
    })

    return (
        <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6 gap-10">
            <Card className="w-full sm:max-w-md">
                <CardHeader>
                    <CardTitle>Square Area Calculator</CardTitle>
                    <CardDescription>
                        Input the square side to calculate.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        id="form-square-area"
                        onSubmit={(e) => {
                            e.preventDefault()
                            form.handleSubmit()
                        }}
                    >
                        <FieldGroup>
                            <form.Field
                                name="panjangRusuk"
                                children={(field) => {
                                    const isInvalid =
                                        field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <Field data-invalid={isInvalid}>
                                            <FieldLabel htmlFor="form-square-area-panjangRusuk">
                                                Side
                                            </FieldLabel>
                                            <Input
                                                type="number"
                                                id="form-square-area-panjangRusuk"
                                                name={field.name}
                                                value={field.state.value || ""}
                                                onBlur={field.handleBlur}
                                                onChange={(e) =>
                                                    field.handleChange(Number(e.target.value))
                                                }
                                                aria-invalid={isInvalid}
                                                placeholder="5"
                                                min={0}
                                                step="any"
                                            />
                                            <FieldDescription>
                                                The side must be a positive number.
                                            </FieldDescription>
                                            {isInvalid && (
                                                <FieldError errors={field.state.meta.errors} />
                                            )}
                                        </Field>
                                    )
                                }}
                            />
                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter>
                    <Field orientation="horizontal">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                                form.reset();
                                setAreaResult(null);
                            }}
                        >
                            Reset
                        </Button>
                        <Button type="submit" form="form-square-area">
                            Calculate
                        </Button>
                    </Field>
                </CardFooter>
            </Card>

            {areaResult !== null && (
                <Card className="w-full sm:max-w-md">
                    <CardContent>
                        The square area is <strong>{areaResult.toFixed(2)}</strong>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

export default SquareAreaForm;
