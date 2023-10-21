    // الحصول على عنوان الصفحة الحالي
    var currentPage = window.location.href;

    // الحصول على جميع الروابط داخل النافبار
    var navLinks = document.querySelectorAll('.container ul li a');

    // فحص كل رابط داخل النافبار
    navLinks.forEach(function(link) {
        // إذا كان عنوان الرابط يحتوي على عنوان الصفحة الحالي
        if (currentPage.indexOf(link.getAttribute('href')) !== -1) {
            // إضافة الكلاس "active" إلى الرابط
            link.classList.add('active');
        }
    });



