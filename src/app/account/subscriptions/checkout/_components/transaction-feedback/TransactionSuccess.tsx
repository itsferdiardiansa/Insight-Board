export const TransactionSuccess: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="text-center mb-8">
          <svg
            className="checkmark mx-auto"
            viewBox="0 0 52 52"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="checkmark-circle"
              cx="26"
              cy="26"
              fill="none"
              r="25"
            />
            <path
              className="checkmark-check"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
              fill="none"
            />
          </svg>
          <h2 className="text-3xl font-bold text-gray-900 mt-6">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mt-2">
            Thank you for subscribing to{' '}
            <span id="success-plan-name">InsightBoard Professional</span>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Order Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Order Number</p>
                <p className="font-medium">INS-2023-10956</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium" id="order-date">
                  October 25, 2023
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Plan</p>
                <p className="font-medium" id="receipt-plan-name">
                  Professional
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-medium" id="receipt-amount">
                  $79.00
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Payment Method</p>
                <p className="font-medium" id="receipt-payment-method">
                  •••• 3456
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Next Billing Date</p>
                <p className="font-medium" id="next-billing-date">
                  November 25, 2023
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3">Receipt</h4>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600" id="receipt-plan-description">
                  Professional Plan (Monthly)
                </span>
                <span className="font-medium" id="receipt-subtotal">
                  $79.00
                </span>
              </div>
              <div
                className="flex justify-between mb-2 hidden"
                id="receipt-discount-row"
              >
                <span className="text-gray-600">Discount</span>
                <span
                  className="font-medium text-green-600"
                  id="receipt-discount"
                >
                  -$0.00
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between mt-2 pt-2 border-t border-gray-200">
                <span className="font-semibold">Total</span>
                <span className="font-bold" id="receipt-total">
                  $79.00
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-indigo-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                Account Status
              </h3>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-md font-medium text-indigo-900">
                    Account Activated
                  </h4>
                  <p className="text-sm text-indigo-700">
                    Your InsightBoard account is now active.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-md font-medium text-indigo-900">
                    Confirmation Email Sent
                  </h4>
                  <p className="text-sm text-indigo-700">
                    Check your inbox for login details and next steps.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Next Steps
              </h3>
              <div className="relative">
                <div className="timeline-item relative pl-10 pb-8">
                  <div className="timeline-dot absolute left-0 top-0 h-8 w-8 rounded-full border-4 border-indigo-600 flex items-center justify-center">
                    <span className="text-sm font-bold text-indigo-600">1</span>
                  </div>
                  <h4 className="font-medium text-gray-900">
                    Set Up Your Dashboard
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Customize your analytics dashboard with the metrics that
                    matter most to your business.
                  </p>
                </div>
                <div className="timeline-item relative pl-10 pb-8">
                  <div className="timeline-dot absolute left-0 top-0 h-8 w-8 rounded-full border-4 border-indigo-600 flex items-center justify-center">
                    <span className="text-sm font-bold text-indigo-600">2</span>
                  </div>
                  <h4 className="font-medium text-gray-900">
                    Connect Your Data Sources
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Integrate with your existing tools to start gathering
                    insights right away.
                  </p>
                </div>
                <div className="timeline-item relative pl-10">
                  <div className="timeline-dot absolute left-0 top-0 h-8 w-8 rounded-full border-4 border-indigo-600 flex items-center justify-center">
                    <span className="text-sm font-bold text-indigo-600">3</span>
                  </div>
                  <h4 className="font-medium text-gray-900">
                    Invite Your Team
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Add team members to collaborate and share insights across
                    your organization.
                  </p>
                  <div className="mt-3">
                    <button className="text-sm px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium rounded-lg transition-colors">
                      Invite Team Members
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Need Help Getting Started?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-sm transition-all"
              href="#"
            >
              <div className="flex items-center mb-2">
                <svg
                  className="h-5 w-5 text-indigo-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span className="font-medium">Documentation</span>
              </div>
              <p className="text-sm text-gray-600">
                Browse our comprehensive guides and tutorials
              </p>
            </a>
            <a
              className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-sm transition-all"
              href="#"
            >
              <div className="flex items-center mb-2">
                <svg
                  className="h-5 w-5 text-indigo-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span className="font-medium">Video Tutorials</span>
              </div>
              <p className="text-sm text-gray-600">
                Watch step-by-step video walkthroughs
              </p>
            </a>
            <a
              className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-sm transition-all"
              href="#"
            >
              <div className="flex items-center mb-2">
                <svg
                  className="h-5 w-5 text-indigo-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span className="font-medium">Book a Demo</span>
              </div>
              <p className="text-sm text-gray-600">
                Schedule a personalized onboarding session
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors text-center"
            href="#"
          >
            Go to Dashboard
          </a>
          <a
            className="py-3 px-6 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors text-center"
            href="#"
          >
            View Receipt
          </a>
        </div>
      </div>
    </div>
  )
}
