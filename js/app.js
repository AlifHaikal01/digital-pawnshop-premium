function money(v){return "RM "+Number(v).toLocaleString("en-MY",{minimumFractionDigits:2,maximumFractionDigits:2})}
function toast(msg){let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';t.style.cssText='position:fixed;right:24px;bottom:24px;background:#0f172a;color:#fff;padding:12px 15px;border-radius:10px;z-index:200;box-shadow:0 12px 30px rgba(15,23,42,.2)';document.body.appendChild(t)}t.textContent=msg;t.style.display='block';clearTimeout(window.tt);window.tt=setTimeout(()=>t.style.display='none',2200)}
function demoLogin(role){if(role==='customer')location.href='customer/dashboard.html';if(role==='pvo')location.href='valuation/dashboard.html';if(role==='fro')location.href='finance/dashboard.html'}
function calculateOffer(){const el=document.getElementById('assessed');if(!el)return;const v=parseFloat(el.value.replace(/,/g,''))||0;document.getElementById('financeOut').textContent=money(v*.70);document.getElementById('safeOut').textContent='RM '+((v/100)*.50).toFixed(2)+' / month'}
function setPill(id,text,cls){const el=document.getElementById(id);if(!el)return;el.textContent=text;el.className='pill '+cls}
function approveDropoff(){setPill('reviewStatus','Approved for Drop-Off','info');toast('Application approved for physical drop-off')}
function rejectApplication(){setPill('reviewStatus','Rejected','danger');toast('Application rejected')}
function confirmDisbursement(){setPill('disbStatus','Confirmed','success');toast('Financing disbursement confirmed')}
function verifyPayment(){setPill('paymentStatus','Verified','success');toast('Payment verified')}
function payRedemption(){setPill('redeemStatus','Settled','success');const b=document.getElementById('payBtn');if(b){b.textContent='Payment completed';b.disabled=true}toast('Payment successful — device ready for collection')}
