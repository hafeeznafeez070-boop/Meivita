<template>
  <main class="w-full">
    <section class="w-[90%] mx-auto px-4 md:px-6 lg:px-8 py-10">
      <header class="mb-8">
        <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-meivita-dark">
          Delivery — <span class="text-meivita-green">Mei.vita</span>
        </h1>
      </header>
    </section>

    <div class="max-w-[900px] mx-auto">
      <p class="mt-3 mb-5 text-[20px] text-meivita-dark/80 leading-relaxed">
        All orders are sent via fully-tracked delivery and will be delivered within 1–2 business
        days. Orders placed after 2pm will be processed the following business day. Please note all
        orders placed on Saturday, Sunday and bank holidays will be processed on the following business day.
      </p>
      <section class="space-y-4">
        <h2 class="text-4xl font-semibold text-meivita-green">UK</h2>
        <div class="overflow-x-auto border border-black/10 bg-white">
          <table class="min-w-[720px] w-full text-left">
            <thead class="bg-black/[0.03] text-meivita-dark">
              <tr>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Destination</th>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Delivery Type</th>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Timing</th>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Cost</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-black/10 text-meivita-dark">
              <tr>
                <td class="p-[20px] text-[18px]">UK Mainland</td>
                <td class="p-[20px] text-[18px]">Standard Delivery</td>
                <td class="p-[20px] text-[18px]">2 working days, fully tracked</td>
                <td class="p-[20px] text-[18px]">£2.99 / Free on orders over Delivery Threshold</td>
              </tr>
              <tr>
                <td class="p-[20px] text-[18px]">UK Mainland</td>
                <td class="p-[20px] text-[18px]">Next Day Delivery</td>
                <td class="p-[20px] text-[18px]">
                  Next working day (orders placed before 2pm on a weekday). Orders placed after 2pm may
                  be delivered within 2 working days. Weekend orders dispatch next working day.
                </td>
                <td class="p-[20px] text-[18px]">£3.99</td>
              </tr>
              <tr>
                <td class="p-[20px] text-[18px]">Channel Islands</td>
                <td class="p-[20px] text-[18px]">Standard Delivery</td>
                <td class="p-[20px] text-[18px]">3–5 days</td>
                <td class="p-[20px] text-[18px]">£2.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mt-10 space-y-4">
        <h2 class="text-4xl font-semibold text-meivita-green">Europe</h2>
        <div class="overflow-x-auto border border-black/10 bg-white">
          <table class="min-w-[720px] w-full text-left">
            <thead class="bg-black/[0.03] text-meivita-dark">
              <tr>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Destination</th>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Delivery Type</th>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Timing</th>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Cost</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-black/10 text-meivita-dark">
              <tr>
                <td class="p-[20px] text-[18px]">Spain</td>
                <td class="p-[20px] text-[18px]">Standard Delivery</td>
                <td class="p-[20px] text-[18px]">3–5 days</td>
                <td class="p-[20px] text-[18px]">£11.99</td>
              </tr>
              <tr>
                <td class="p-[20px] text-[18px]">Ireland</td>
                <td class="p-[20px] text-[18px]">Standard Delivery</td>
                <td class="p-[20px] text-[18px]">3–5 days</td>
                <td class="p-[20px] text-[18px]">£9.99</td>
              </tr>
              <tr>
                <td class="p-[20px] text-[18px]">Italy</td>
                <td class="p-[20px] text-[18px]">Standard Delivery</td>
                <td class="p-[20px] text-[18px]">3–5 days</td>
                <td class="p-[20px] text-[18px]">£9.99</td>
              </tr>
              <tr>
                <td class="p-[20px] text-[18px]">France</td>
                <td class="p-[20px] text-[18px]">Standard Delivery</td>
                <td class="p-[20px] text-[18px]">5–7 days</td>
                <td class="p-[20px] text-[18px]">£9.99</td>
              </tr>
              <tr>
                <td class="p-[20px] text-[18px]">Netherlands</td>
                <td class="p-[20px] text-[18px]">Standard Delivery</td>
                <td class="p-[20px] text-[18px]">5–10 days</td>
                <td class="p-[20px] text-[18px]">£7.99</td>
              </tr>
              <tr>
                <td class="p-[20px] text-[18px]">Sweden</td>
                <td class="p-[20px] text-[18px]">Standard Delivery</td>
                <td class="p-[20px] text-[18px]">5–7 days</td>
                <td class="p-[20px] text-[18px]">£9.99</td>
              </tr>
              <tr>
                <td class="p-[20px] text-[18px]">Austria</td>
                <td class="p-[20px] text-[18px]">Standard Delivery</td>
                <td class="p-[20px] text-[18px]">5–7 days</td>
                <td class="p-[20px] text-[18px]">£9.99</td>
              </tr>
              <tr>
                <td class="p-[20px] text-[18px]">Rest of EU</td>
                <td class="p-[20px] text-[18px]">Standard Delivery</td>
                <td class="p-[20px] text-[18px]">5–10 days</td>
                <td class="p-[20px] text-[18px]">£9.99–12.99</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xl text-meivita-dark/70">
          Please note, unfortunately we are unable to ship to Germany until further notice.
        </p>
      </section>

      <section class="mt-10 space-y-4">
        <h2 class="text-4xl font-semibold text-meivita-green">USA &amp; Canada</h2>
        <div class="overflow-x-auto border border-black/10 bg-white">
          <table class="min-w-[720px] w-full text-left">
            <thead class="bg-black/[0.03] text-meivita-dark">
              <tr>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Destination</th>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Delivery Type</th>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Timing</th>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Cost</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-black/10 text-meivita-dark">
              <tr>
                <td class="p-[20px] text-[18px]">USA</td>
                <td class="p-[20px] text-[18px]">Standard Delivery</td>
                <td class="p-[20px] text-[18px]">5–10 days</td>
                <td class="p-[20px] text-[18px]">£14.99</td>
              </tr>
              <tr>
                <td class="p-[20px] text-[18px]">Canada</td>
                <td class="p-[20px] text-[18px]">Standard Delivery</td>
                <td class="p-[20px] text-[18px]">5–10 days</td>
                <td class="p-[20px] text-[18px]">£16.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mt-10 space-y-4">
        <h2 class="text-4xl font-semibold text-meivita-green">Australia &amp; New Zealand</h2>
        <div class="overflow-x-auto border border-black/10 bg-white">
          <table class="min-w-[720px] w-full text-left">
            <thead class="bg-black/[0.03] text-meivita-dark">
              <tr>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Destination</th>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Delivery Type</th>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Timing</th>
                <th class="p-[20px] text-[18px] font-medium w-[225px] text-black font-bold">Cost</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-black/10 text-meivita-dark">
              <tr>
                <td class="p-[20px] text-[18px]">Australia</td>
                <td class="p-[20px] text-[18px]">Standard Delivery</td>
                <td class="p-[20px] text-[18px]">5–10 days</td>
                <td class="p-[20px] text-[18px]">£16.99</td>
              </tr>
              <tr>
                <td class="p-[20px] text-[18px]">New Zealand</td>
                <td class="p-[20px] text-[18px]">Standard Delivery</td>
                <td class="p-[20px] text-[18px]">5–10 days</td>
                <td class="p-[20px] text-[18px]">£14.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mt-12">
        <h2 class="text-4xl font-semibold text-meivita-green">
          International Orders – Please be aware
        </h2>
        <p class="mt-3 mb-3 text-[18px] text-meivita-dark/80 leading-relaxed">
          International orders can incur duties and taxes due upon delivery. Although charges are not always
          incurred, assessment of duties and taxes will be based on the value of the order and the tax‑free threshold,
          if it exists, for goods imported into the destination country. Payment of any duties and taxes is the
          responsibility of the recipient and these fees are collected at the time of delivery. If your package is
          rejected at the recipient country’s customs/border and is returned to sender, we will refund you the product
          cost in full excluding the postage fee paid to reach the recipient country.
        </p>
      </section>
    </div>
  </main>
</template>
