import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-700">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-base text-gray-500 mb-10">Effective Date: <strong>16-04-2025</strong></p>

        <p className="text-lg leading-8 mb-8">
          Franchisify ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
          <a href="https://franchisify.in" className="text-blue-600 underline ml-1 hover:text-blue-800">https://franchisify.in</a>.
        </p>

        <div className="space-y-10">

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Personal Identification Information:</strong> Name, email, phone, company details, and more when you fill out forms or subscribe.</li>
              <li><strong>Non-Personal Identification Information:</strong> Browser type, IP, device, OS, and site interaction via cookies or analytics.</li>
              <li><strong>Usage Data:</strong> Patterns about how you interact with our site to enhance usability and design.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To process inquiries and franchise-related requests.</li>
              <li>To enhance our website and customer experience.</li>
              <li>To send newsletters and marketing communications (with your consent).</li>
              <li>To study usage patterns and improve features.</li>
              <li>To comply with legal and regulatory requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">3. Sharing Your Information</h2>
            <p className="mb-4">We do not sell or trade personal data. Information is only shared:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>With trusted service providers under confidentiality agreements.</li>
              <li>To comply with legal obligations or protect rights and safety.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">4. Data Security</h2>
            <p>
              We implement strong security measures to protect your data from unauthorized access.
              However, no method of transmission over the Internet is entirely secure.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">5. Third-Party Services</h2>
            <p>
              Our site may contain links to external websites. We are not responsible for their privacy policies or content.
              Please review their terms before using those sites.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">6. Cookies</h2>
            <p className="mb-2">Franchisify uses cookies to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand and store user preferences.</li>
              <li>Analyze site traffic and interactions.</li>
            </ul>
            <p className="mt-4">You can adjust your cookie settings anytime through your browser preferences.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access, modify, or delete your personal data.</li>
              <li>Withdraw consent for data processing.</li>
              <li>Unsubscribe from marketing communications.</li>
            </ul>
            <p className="mt-4">Contact us at <strong>enquiry@franchisify.in</strong> for any requests regarding your data.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">8. Changes to This Privacy Policy</h2>
            <p>
              This policy may be updated occasionally. Any changes will be posted here, and the updated effective date will be indicated.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">9. Contact Us</h2>
            <p className="mb-2">If you have any questions about this policy, reach out to us:</p>
            <ul className="list-none space-y-2">
              <li>📧 Email: <a href="mailto:enquiry@franchisify.in" className="text-blue-600 underline hover:text-blue-800">enquiry@franchisify.in</a></li>
              <li>📍 Address: Door No:84, Industrial Layout, 5TH Block, 3RD Cross, Near Jyothi Nivas College, Koramangala, Bengaluru, Karnataka 560095</li>
              <li>🌐 Website: <a href="https://franchisify.in" className="text-blue-600 underline hover:text-blue-800">https://franchisify.in</a></li>
            </ul>
          </section>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
