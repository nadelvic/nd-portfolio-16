/**
 * Created by nathan on 20/07/16.
 */

jQuery(document).ready(function($){




    function buildLandingCanvas(){
        var w = 1193;
        var h = 844.5;
        var landingCanvasDiv = document.getElementById('landing-canvas-container');
        var wCanvas = landingCanvasDiv.clientWidth;
        var hCanvas = landingCanvasDiv.clientHeight;
        //console.log('w='+wCanvas+' h='+hCanvas);
        var r = wCanvas/hCanvas;
        if(r >= w/h ){
            h = w/r;
        }
        else{
            w = r*h;
        }
        //console.log('nw='+w+'nh'+h);
        // VERY IMPORTANT FOR RESIZING
        var rsr = Raphael(document.getElementById('landing-canvas-container'), w, h);
        rsr.setViewBox(0, 0, w, h, true);
        var container = document.getElementById('landing-canvas-container');
        var innerDoc = container.contentDocument;

        var svg = document.querySelector("svg");
        svg.setAttribute('width', wCanvas+'px');
        svg.setAttribute('height', hCanvas+'px');

        var o=0.3;
        var rect_a = rsr.rect(-0.6, -0.7, 1194.3, 844.5);
        rect_a.attr({x: '-0.6',y: '-0.7',class: 'st0','stroke-width': '0.7','stroke-opacity': o,'fill': '#111427'}).data('id', 'rect_a');
        rect_a.toBack();

        var circle_b = rsr.circle(599, 316, 4);
        circle_b.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_b');
        var circle_c = rsr.circle(608, 290, 4);
        circle_c.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_c');
        var circle_d = rsr.circle(589, 290, 4);
        circle_d.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_d');
        var circle_e = rsr.circle(599, 266, 4);
        circle_e.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_e');
        var circle_f = rsr.circle(627, 338, 4);
        circle_f.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_f');
        var circle_g = rsr.circle(613, 352, 4);
        circle_g.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_g');
        var circle_h = rsr.circle(817, 304, 4);
        circle_h.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_h');
        var circle_i = rsr.circle(941, 0, 4);
        circle_i.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_i');
        var circle_j = rsr.circle(1194, 104, 4);
        circle_j.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_j');
        var circle_k = rsr.circle(572, 339, 4);
        circle_k.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_k');
        var circle_l = rsr.circle(585, 353, 4);
        circle_l.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_l');
        var circle_m = rsr.circle(632, 404, 4);
        circle_m.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_m');
        var circle_n = rsr.circle(566, 404, 4);
        circle_n.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_n');
        var circle_o = rsr.circle(598, 368, 4);
        circle_o.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_o');
        var circle_p = rsr.circle(666, 439, 4);
        circle_p.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_p');
        var circle_q = rsr.circle(712, 563, 4);
        circle_q.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_q');
        var circle_r = rsr.circle(700, 593, 4);
        circle_r.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_r');
        var circle_s = rsr.circle(496, 590, 4);
        circle_s.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_s');
        var circle_t = rsr.circle(485, 564, 4);
        circle_t.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_t');
        var circle_u = rsr.circle(464, 514, 4);
        circle_u.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_u');
        var circle_v = rsr.circle(457, 498, 4);
        circle_v.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_v');
        var circle_w = rsr.circle(500, 474, 4);
        circle_w.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_w');
        var circle_x = rsr.circle(524, 462, 4);
        circle_x.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_x');
        var circle_y = rsr.circle(549, 448, 4);
        circle_y.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_y');
        var circle_z = rsr.circle(532, 440, 4);
        circle_z.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_z');
        var circle_aa = rsr.circle(733, 511, 4);
        circle_aa.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_aa');
        var circle_ab = rsr.circle(739, 497, 4);
        circle_ab.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_ab');
        var circle_ac = rsr.circle(699, 475, 4);
        circle_ac.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_ac');
        var circle_ad = rsr.circle(675, 462, 4);
        circle_ad.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_ad');
        var circle_ae = rsr.circle(649, 449, 4);
        circle_ae.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_ae');
        var circle_af = rsr.circle(648, 395, 4);
        circle_af.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_af');
        var circle_ag = rsr.circle(550, 395, 4);
        circle_ag.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_ag');
        var circle_ah = rsr.circle(378, 304, 4);
        circle_ah.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_ah');
        var circle_ai = rsr.circle(184, 200, 4);
        circle_ai.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_ai');
        var circle_aj = rsr.circle(0, 102, 4);
        circle_aj.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_aj');
        var circle_ak = rsr.circle(253, 1, 4);
        circle_ak.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_ak');
        var circle_al = rsr.circle(133, 350, 4);
        circle_al.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_al');
        var circle_am = rsr.circle(83, 496, 4);
        circle_am.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_am');
        var circle_an = rsr.circle(1, 741, 4);
        circle_an.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_an');
        var circle_ao = rsr.circle(157, 844, 4);
        circle_ao.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_ao');
        var circle_ap = rsr.circle(122, 677, 4);
        circle_ap.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_ap');
        var circle_aq = rsr.circle(268, 599, 4);
        circle_aq.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_aq');
        var circle_ar = rsr.circle(310, 679, 4);
        circle_ar.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_ar');
        var circle_as = rsr.circle(386, 819, 4);
        circle_as.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_as');
        var circle_at = rsr.circle(399, 843, 4);
        circle_at.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_at');
        var circle_au = rsr.circle(598, 843, 4);
        circle_au.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_au');
        var circle_av = rsr.circle(795, 834, 4);
        circle_av.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_av');
        var circle_aw = rsr.circle(808, 811, 4);
        circle_aw.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_aw');
        var circle_ax = rsr.circle(884, 672, 4);
        circle_ax.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_ax');
        var circle_ay = rsr.circle(925, 596, 4);
        circle_ay.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_ay');
        var circle_az = rsr.circle(1077, 678, 4);
        circle_az.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_az');
        var circle_ba = rsr.circle(1045, 843, 4);
        circle_ba.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_ba');
        var circle_bb = rsr.circle(598, 421, 4);
        circle_bb.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'circle_bb');

        var path_nd1 = rsr.path("M799.2 844.3L479.4 1.6");
        path_nd1.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'path_bc');


        var path_bc = rsr.path("M797.2,843.3");
        path_bc.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'path_bc');

        var path_bd = rsr.path("M 0,743.5 1194.5,102.3 1045,843.9 252.3,-0.6  z");
        path_bd.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'path_bd');

        var path_nd3 = rsr.path("M 1193.7,740.5 -0.9,101.4 157.9,844.3 532.3,440.4 943.1,-2.8 598.9,844.3 252.3,-0.6");
        path_nd3.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'path_bd');

        var path_be = rsr.path("M791.1 843.9L1194.5 102.3");
        path_be.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'path_be');

        var path_nd2 = rsr.path("M599.1 -0.6L598.6 852.6");
        path_nd2.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'path_bc');

        var path_nd5 = rsr.path("M701.7 -0.2L377.5 844.3");
        path_nd5.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'path_bc');

        var path_nd6 = rsr.path("M496.9 0L821.8 846.5");
        path_nd6.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'path_bc');

        var path_nd7 = rsr.path("M718.9,-0.2 399.8,844.3 -0.9,101.4 ");
        path_nd7.attr({class: 'st1','stroke': '#3F4C9E','stroke-width': '0.7','stroke-opacity': o,'fill': 'none'}).data('id', 'path_bc');


        var rsrGroups = [];

    }

    // INITIAL BUILDING OF THE CANVAS


        buildLandingCanvas();


    // CANVAS REBUILDING ON RESIZE ACTINO
    $( window ).resize(function() {
        buildLandingCanvas();

    });




});
