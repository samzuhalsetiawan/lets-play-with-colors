import { debug } from '@/lib/utils'
import colorNameList from 'color-name-list'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const colors: {name: string, hex: string}[] = []
        for (let index = 0; index < 17; index++) {
            colors.push(colorNameList[index])
        }
        return NextResponse.json({
            code: 200,
            error: false,
            errorMessage: "",
            data: colors
        }, { status: 200 })
    } catch (error: any) {
        console.error(error)
        return NextResponse.json({
            code: 500,
            error: true,
            errorMessage: error.message,
            data: null
        }, { status: 500 })
    }
}