import { stripe } from "@/lib/stripe"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const priceId = "price_1N5yH8GNfN02vswiv6jwgtH7"

	const checkoutSession = await stripe.checkout.sessions.create({
		success_url: `${process.env.NEXT_URL}/success`,
		cancel_url: `${process.env.NEXT_URL}/`,
		mode: "payment",
		line_items: [
			{
				price: priceId,
				quantity: 1,
			},
		],
	})

	return res.status(201).json({
		checkoutUrl: checkoutSession.url,
	})
}
