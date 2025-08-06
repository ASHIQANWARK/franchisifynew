import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl p-6 sm:p-8 md:p-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Terms & Conditions
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
          Effective Date: 16-04-2025
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">1. Use of the Website</h2>
            <p>
              You agree to use the Site for lawful purposes only and not to engage in any activity that disrupts or interferes with the website's security, content, or servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">2. Intellectual Property Rights</h2>
            <p>
              All content on Franchisify.in including text, graphics, logos, images, and software are the intellectual property of Franchisify and protected by applicable copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">3. Franchise Information Disclaimer</h2>
            <p>
              Information presented on this website is for informational purposes only and does not constitute legal, business, or investment advice. Franchisify is not responsible for any business decisions made based on the information provided.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">4. User-Submitted Content</h2>
            <p>
              Any content you submit to Franchisify (inquiries, forms, suggestions) becomes the property of Franchisify. You grant us a non-exclusive, royalty-free license to use, reproduce, and distribute this content for business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
            <p>
              Franchisify will not be liable for any damages arising from the use or inability to use the Site, including but not limited to indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We do not control or endorse these sites and are not responsible for their content or any damages that may arise from your use of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">7. Changes to Terms</h2>
            <p>
              Franchisify reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after any changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">8. Governing Law</h2>
            <p>
              These Terms & Conditions are governed by and construed in accordance with the laws of [Insert Applicable Jurisdiction].
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">9. Contact Us</h2>
            <p>
              For any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mt-3 text-sm sm:text-base">
              <p className="mb-2">📧 <span className="font-medium">Email:</span> enquiry@franchisify.in</p>
              <p className="mb-2">📍 <span className="font-medium">Address:</span> Door No:84, Industrial Layout, 5TH Block, 3RD Cross, Near Jyothi Nivas College, Koramangala, Bengaluru, Karnataka 560095</p>
              <p>🌐 <span className="font-medium">Website:</span> <a href="https://franchisify.in" className="text-blue-600 underline hover:text-blue-800">https://franchisify.in</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
