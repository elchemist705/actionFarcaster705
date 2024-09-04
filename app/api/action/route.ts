<<<<<<< Tabnine <<<<<<<
import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit/frame';//-
import { NextRequest, NextResponse } from 'next/server';//-
async function getResponse(req: NextRequest): Promise<NextResponse> {
    // TODO//-
}//-
  const body: FrameRequest = await req.json();//+
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAW_ONCHAIN_KIT' });//+

export async function POST(req: NextRequest): Promise<NextResponse> {//-
    console.log('POST');//-
    return getResponse(req);//-
}//-
//-
export const dynamic = 'force-dynamic';//-
//-
const body: FrameRequest = await req.json();//-
const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAW_ONCHAIN_KIT' });//-
//-
if (!isValid) {//-
  if (!isValid) {//+
    return new NextResponse('Message not valid', { status: 500 });
}//-
  }//+

return NextResponse.json({ message: 'Hello from the frame route' }), { status: 200 };//-
  return NextResponse.json({ message: 'Hello from the frame route' }), { status: 200 };//+
}//+
>>>>>>> Tabnine >>>>>>>