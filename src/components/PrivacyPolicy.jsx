import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg p-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900 mb-6 text-center"
        >
          私隱政策
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 mb-4"
        >
          中國遊蹤有限公司（以下簡稱「本公司」或「我們」）承諾遵守《個人資料（私隱）條例》（香港法例第 486 章）的規定，保護您的個人資料私隱。本私隱政策旨在說明我們如何收集、使用、披露和保護您的個人資料。
        </motion.p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. 個人資料的收集</h2>
        <p className="text-gray-700 mb-4">
          我們可能會在您使用本公司服務時收集您的個人資料，包括但不限於：姓名、聯絡電話、電子郵件地址、通訊地址、身份證明文件號碼、出生日期、付款資料以及其他與旅遊服務相關的資訊。這些資料可能透過以下方式收集：
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>您透過網站、電話、電子郵件或親身向我們查詢或預訂服務時提供。</li>
          <li>您參與我們的市場推廣活動、問卷調查或比賽時提供。</li>
          <li>您瀏覽我們的網站時，透過 Cookies 或其他追蹤技術自動收集。</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 個人資料的使用</h2>
        <p className="text-gray-700 mb-4">
          我們收集您的個人資料主要用於以下目的：
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>處理您的旅遊預訂和相關服務安排。</li>
          <li>提供客戶服務和支援，回應您的查詢和要求。</li>
          <li>向您發送有關本公司產品、服務、優惠和推廣活動的資訊（在您同意的情況下）。</li>
          <li>進行市場研究、分析和統計，以改進我們的產品和服務。</li>
          <li>遵守適用法律、法規和法院命令。</li>
          <li>防止欺詐和保障本公司及客戶的合法權益。</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 個人資料的披露</h2>
        <p className="text-gray-700 mb-4">
          我們可能會向以下第三方披露您的個人資料，以實現上述目的：
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>與旅遊服務相關的供應商，例如航空公司、酒店、旅行社、保險公司等。</li>
          <li>本公司的附屬公司、聯營公司或業務合作夥伴。</li>
          <li>為本公司提供行政、電訊、電腦、付款或其他服務的第三方服務供應商。</li>
          <li>執法機構、政府部門或監管機構，以遵守法律要求。</li>
          <li>經您同意的其他第三方。</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 個人資料的保護</h2>
        <p className="text-gray-700 mb-4">
          我們採取合理的安全措施，包括實體、電子和管理程序，以保護您的個人資料免受未經授權的查閱、使用、披露、修改或破壞。然而，互聯網上的資料傳輸並非絕對安全，我們無法保證您透過互聯網傳輸給我們的資料的絕對安全。
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cookies 的使用</h2>
        <p className="text-gray-700 mb-4">
          我們的網站可能使用 Cookies 來提升您的瀏覽體驗。Cookies 是儲存在您電腦或行動裝置上的小型文字檔案，用於記錄您的偏好設定、分析網站流量和提供個人化內容。您可以透過瀏覽器設定拒絕 Cookies，但這可能會影響您使用網站的某些功能。
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">6. 查閱和更正個人資料</h2>
        <p className="text-gray-700 mb-4">
          您有權查閱和更正我們持有的您的個人資料。如需查閱或更正您的個人資料，請透過以下方式聯絡我們：
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>電子郵件：info@cthk.hk</li>
          <li>電話：5951 9582</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">7. 本私隱政策的變更</h2>
        <p className="text-gray-700 mb-4">
          本公司保留隨時修改本私隱政策的權利。任何修改將在本網站上發布，並即時生效。建議您定期查閱本私隱政策，以了解最新資訊。
        </p>

        <p className="text-gray-700 text-sm mt-8 text-center">
          最後更新日期：2025年6月24日
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

