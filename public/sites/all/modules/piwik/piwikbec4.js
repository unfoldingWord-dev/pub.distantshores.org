(function($){$(document).ready(function(){$(document.body).bind("mousedown keyup touchstart",function(event){$(event.target).closest("a,area").each(function(){if(Drupal.settings.piwik.trackMailto&&$(this).is("a[href^='mailto:'],area[href^='mailto:']")){_paq.push(["trackEvent","Mails","Click",this.href.substring(7)]);}});});$(document).bind("cbox_complete",function(){var href=$.colorbox.element().attr("href");if(href){_paq.push(["setCustomUrl",href]);_paq.push(["trackPageView"]);}});});})(jQuery);