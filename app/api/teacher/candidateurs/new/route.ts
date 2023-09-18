import CandidateurFormateur from "@/models/CandidateurFormateur";
import { connectToDB } from "@/db/connectToDB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request:NextRequest) => {
    const { name, secondName, email, phone, level, subject, cv, photo, state } = await request.json();

    const candidateExists = await CandidateurFormateur.findOne({email})

    if(candidateExists) {
        return NextResponse.json({
            error: "Vous avez déjà envoyé votre candidat"
        }, {
            status: 400
        })
    }

    try {
        await connectToDB();
        const newCandidateur = new CandidateurFormateur({ name, secondName, email, phone, level, subject, cv, photo, state });

        await newCandidateur.save();
        return new Response(JSON.stringify(newCandidateur), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new Candidateur", { status: 500 });
    }
}