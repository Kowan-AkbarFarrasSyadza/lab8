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

export function CubesurfaceForm() {
    const [surfaceResult, setsurfaceResult] = useState<number | null>(null);
    const form = useForm({
        defaultValues: {
            panjangRusuk: 0,
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            try {
                const response = await fetch("/api/cube-surface", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ panjangRusuk: value.panjangRusuk }),
                })
                const data = await response.json()
                setsurfaceResult(data.luasPermukaan)
            } catch (error: any) {
                throw new Error(`Failed to calculate surface: ${error.message}`)
            }
        },
    })

    return (
        <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6 gap-10">
            <Card className="w-full sm:max-w-md">
                <CardHeader>
                    <CardTitle>Cube surface Calculator</CardTitle>
                    <CardDescription>
                        Input the cube side to calculate.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        id="form-cube-surface"
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
                                            <FieldLabel htmlFor="form-cube-surface-panjangRusuk">
                                                Side
                                            </FieldLabel>
                                            <Input
                                                type="number"
                                                id="form-cube-surface-panjangRusuk"
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
                                setsurfaceResult(null);
                            }}
                        >
                            Reset
                        </Button>
                        <Button type="submit" form="form-cube-surface">
                            Calculate
                        </Button>
                    </Field>
                </CardFooter>
            </Card>

            {surfaceResult !== null && (
                <Card className="w-full sm:max-w-md">
                    <CardContent>
                        The cube surface is <strong>{surfaceResult.toFixed(2)}</strong>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

export default CubesurfaceForm;
