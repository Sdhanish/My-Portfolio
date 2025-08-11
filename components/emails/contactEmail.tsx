import * as React from "react";
import { Html, Head, Preview, Body, Container, Heading, Text, Hr, Section } from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Contact Enquiry</Preview>
      <Body style={{ fontFamily: "sans-serif", backgroundColor: "#f9f9f9", padding: "20px" }}>
        <Container style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
          <Heading as="h2">📩 Porfolio Contact me </Heading>
          <Section>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Hr />
            <Text style={{ whiteSpace: "pre-wrap" }}>{message}</Text>
          </Section>
          <Hr />
          <Text style={{ fontSize: "12px", color: "#888" }}>
            This email was sent from your portfolio contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
