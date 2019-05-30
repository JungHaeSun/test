package com.util;

public class Paging {

	/**
	 * 
	 * 페이지의 링크 스트링을 반들어줌<br>
	 * 
	 * <pre>
	
	 * Case1) [1] [2] [3]
	
	 * Case2) [1] [2] ...[10] [Next]
	
	 * Case3) [Prev] [11] ... [20] [Next]
	
	 * Case4) [Prev] [21] [22]
	 * 
	 * </pre>
	 * 
	 * @param totalCnt 리스트 전체 갯수
	 * 
	 * @param perPage  페이지당 리스트갯수
	 * 
	 * @param curPage  현재 보여줄 페이지번호
	 * 
	 * @param jsName   링크를 걸어줄 JavaScript 이름
	 * 
	 * @return
	 * 
	 */

	public static String getPageStr(int totalCnt, int perPage, int curPage, String jsName) {

		// getSplitPageLink(totalCount, currentPage, listScale, listPageScale, "");

		/*
		 * 
		 * Case1) [1] [2] [3]
		 * 
		 * Case2) [1] [2] ...[10] [Next]
		 * 
		 * Case3) [Prev] [11] ... [20] [Next]
		 * 
		 * Case4) [Prev] [21] [22]
		 *
		 * 
		 * 
		 */

		StringBuffer sb = new StringBuffer();

//		int totCnt = StringUtil.sToi(totalCnt, 1);

//		int pPage  = StringUtil.sToi(perPage, 1);

//		int cPage  = StringUtil.sToi(curPage, 1);

		int totCnt = totalCnt;

		int pPage = perPage;

		int cPage = curPage;

		// 총 링크 페이지 값

		int pageNo;

		// 마지막 페이지 링커에 보여지는 리스트

		int varNo = totCnt % pPage;

		if (varNo == 0) {

			pageNo = totCnt / pPage;

		} else {

			pageNo = totCnt / pPage + 1;

		}

		sb.append("<div class=\"dataTables_paginate paging_simple_numbers\" id=\"simpletable_paginate\"><ul class=\"pagination\">");

		// Case1

		if (pageNo <= 10) {

			for (int i = 1; i <= pageNo; i++) {

				if (cPage == i) {
 
					sb.append("<li class=\"paginate_button page-item active\"><a href=\"javascript:" + jsName + "(" + i + ");\" tabindex=\"0\" class=\"page-link\">" + i + "</a></li>");
					

				} else {

 
					sb.append("<li class=\"paginate_button page-item\"><a href=\"javascript:" + jsName + "(" + i
							+ ");\" tabindex=\"0\" class=\"page-link\">" + i + "</a></li>");

				}

			}

		}

		// Case2, 3, 4

		else {

			// Case2

			if (cPage <= 10) {

				for (int i = 1; i <= 10; i++) {

					if (cPage == i) {

						// sb.append("["+i+"]");

						// sb.append("<a class=\"on\" href=\"javascript:"+jsName+"("+i+");\">"+ i
						// +"</a>");
						sb.append("<li class=\"paginate_button page-item active\"><a href=\"javascript:" + jsName + "("
								+ i + ");\" tabindex=\"0\" class=\"page-link\">" + i + "</a></li>");

					} else {

						// sb.append("<a href=\"javascript:"+jsName+"("+i+");\">"+ i +"</a>");
						sb.append("<li class=\"paginate_button page-item\"><a href=\"javascript:" + jsName + "(" + i
								+ ");\" tabindex=\"0\" class=\"page-link\">" + i + "</a></li>");
					}

				}

				// sb.append("<a class=\"btn_next\"
				// href=\"javascript:"+jsName+"("+11+");\"><span></span></a>");
				sb.append("<li class=\"paginate_button page-item next\" id=\"simpletable_next\"><a href=\"javascript:"
						+ jsName + "(" + 11
						+ ");\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-right\"></i></a></li>");

				// sb.append("<a class=\"btn_last\"
				// href=\"javascript:"+jsName+"("+pageNo+");\"><span></span></a>");
				sb.append("<li class=\"paginate_button page-item last\" id=\"m_table_1_last\"><a href=\"javascript:"
						+ jsName + "(" + pageNo
						+ ");\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-double-right\"></i></a></li>");

			}

			// Case3, 4

			else if (10 < cPage && cPage <= pageNo) {

				// 각 10 번대 링커

				if (cPage % 10 == 0) {

					int x = (cPage / 10 - 1) * 10 + 1;

					int i;

					// Case4

					if (pageNo - x <= 10) {

						// sb.append("<a class=\"btn_first\"
						// href=\"javascript:"+jsName+"(1);\"><span></span></a>");
						sb.append(
								"<li class=\"paginate_button page-item first \" id=\"m_table_1_first\"><a href=\"javascript:"
										+ jsName
										+ "(1);\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-double-left\"></i></a></li>");

						// sb.append("<a class=\"btn_prev\"
						// href=\"javascript:"+jsName+"("+(x-10)+");\"><span></span></a>");
						sb.append(
								"<li class=\"paginate_button page-item previous \" id=\"simpletable_previous\"><a href=\"javascript:"
										+ jsName + "(" + (x - 10)
										+ ");\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-left\"></i></a></li>");

						for (i = x; i <= x + (pageNo - x); i++) {

							if (cPage == i) {

								// sb.append("["+i+"]");

								// sb.append("<a class=\"on\" href=\"javascript:"+jsName+"("+i+");\">"+ i
								// +"</a>");
								sb.append("<li class=\"paginate_button page-item active\"><a href=\"javascript:"
										+ jsName + "(" + i + ");\" tabindex=\"0\" class=\"page-link\">" + i
										+ "</a></li>");

							} else {

								// sb.append("<a href=\"javascript:"+jsName+"("+i+");\">"+ i +"</a>");
								sb.append("<li class=\"paginate_button page-item\"><a href=\"javascript:" + jsName + "("
										+ i + ");\" tabindex=\"0\" class=\"page-link\">" + i + "</a></li>");

							}

						}

					}

					// Case3

					else {

						// sb.append("<a class=\"btn_first\"
						// href=\"javascript:"+jsName+"(1);\"><span></span></a>");
						sb.append(
								"<li class=\"paginate_button page-item first \" id=\"m_table_1_first\"><a href=\"javascript:"
										+ jsName
										+ "(1);\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-double-left\"></i></a></li>");

						// sb.append("<a class=\"btn_prev\"
						// href=\"javascript:"+jsName+"("+(x-10)+");\"><span></span></a>");
						sb.append(
								"<li class=\"paginate_button page-item previous \" id=\"simpletable_previous\"><a href=\"javascript:"
										+ jsName + "(" + (x - 10)
										+ ");\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-left\"></i></a></li>");

						for (i = x; i <= x + 9; i++) {

							if (cPage == i) {

								// sb.append("["+i+"]");

								// sb.append("<a class=\"on\" href=\"javascript:"+jsName+"("+i+");\">"+ i
								// +"</a>");
								sb.append("<li class=\"paginate_button page-item active\"><a href=\"javascript:"
										+ jsName + "(" + i + ");\" tabindex=\"0\" class=\"page-link\">" + i
										+ "</a></li>");

							} else {

								// sb.append("<a href=\"javascript:"+jsName+"("+i+");\">"+ i +"</a>");
								sb.append("<li class=\"paginate_button page-item\"><a href=\"javascript:" + jsName + "("
										+ i + ");\" tabindex=\"0\" class=\"page-link\">" + i + "</a></li>");

							}

						}

						// sb.append("<a class=\"btn_next\"
						// href=\"javascript:"+jsName+"("+i+");\"><span></span></a>");
						sb.append(
								"<li class=\"paginate_button page-item next\" id=\"simpletable_next\"><a href=\"javascript:"
										+ jsName + "(" + i
										+ ");\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-right\"></i></a></li>");

						// sb.append("<a class=\"btn_last\"
						// href=\"javascript:"+jsName+"("+pageNo+");\"><span></span></a>");
						sb.append(
								"<li class=\"paginate_button page-item last\" id=\"m_table_1_last\"><a href=\"javascript:"
										+ jsName + "(" + pageNo
										+ ");\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-double-right\"></i></a></li>");

					}

				}

				// 1~9 번대 링커

				else {

					int x = (cPage / 10) * 10 + 1;

					int i;

					// Case4

					if (pageNo - x <= 10) {

						// sb.append("<a class=\"btn_first\"
						// href=\"javascript:"+jsName+"(1);\"><span></span></a>");
						sb.append(
								"<li class=\"paginate_button page-item first  \" id=\"m_table_1_first\"><a href=\"javascript:"
										+ jsName
										+ "(1);\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-double-left\"></i></a></li>");

						// sb.append("<a class=\"btn_prev\"
						// href=\"javascript:"+jsName+"("+(x-10)+");\"><span></span></a>");
						sb.append(
								"<li class=\"paginate_button page-item previous  \" id=\"simpletable_previous\"><a href=\"javascript:"
										+ jsName + "(" + (x - 10)
										+ ");\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-left\"></i></a></li>");

						for (i = x; i <= x + (pageNo - x); i++) {

							if (cPage == i) {

								// sb.append("["+i+"]");

								// sb.append("<a class=\"on\" href=\"javascript:"+jsName+"("+i+");\">"+ i
								// +"</a>");
								sb.append("<li class=\"paginate_button page-item active\"><a href=\"javascript:"
										+ jsName + "(" + i + ");\" tabindex=\"0\" class=\"page-link\">" + i
										+ "</a></li>");

							} else {

								// sb.append("<a href=\"javascript:"+jsName+"("+i+");\">"+ i +"</a>");
								sb.append("<li class=\"paginate_button page-item\"><a href=\"javascript:" + jsName + "("
										+ i + ");\" tabindex=\"0\" class=\"page-link\">" + i + "</a></li>");

							}

						}

					}

					// Case3

					else {

						// sb.append("<a class=\"btn_first\"
						// href=\"javascript:"+jsName+"(1);\"><span></span></a>");
						sb.append(
								"<li class=\"paginate_button page-item first \" id=\"m_table_1_first\"><a href=\"javascript:"
										+ jsName
										+ "(1);\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-double-left\"></i></a></li>");

						// sb.append("<a class=\"btn_prev\"
						// href=\"javascript:"+jsName+"("+(x-10)+");\"><span></span></a>");
						sb.append(
								"<li class=\"paginate_button page-item previous \" id=\"simpletable_previous\"><a href=\"javascript:"
										+ jsName + "(" + (x - 10)
										+ ");\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-left\"></i></a></li>");

						for (i = x; i <= x + 9; i++) {

							if (cPage == i) {

								// sb.append("["+i+"]");

								// sb.append("<a class=\"on\" href=\"javascript:"+jsName+"("+i+");\">"+ i
								// +"</a>");
								sb.append("<li class=\"paginate_button page-item active\"><a href=\"javascript:"
										+ jsName + "(" + i + ");\" tabindex=\"0\" class=\"page-link\">" + i
										+ "</a></li>");

							} else {

								// sb.append("<a href=\"javascript:"+jsName+"("+i+");\">"+ i +"</a>");
								sb.append("<li class=\"paginate_button page-item\"><a href=\"javascript:" + jsName + "("
										+ i + ");\" tabindex=\"0\" class=\"page-link\">" + i + "</a></li>");

							}

						}

						// sb.append("<a class=\"btn_next\"
						// href=\"javascript:"+jsName+"("+i+");\"><span></span></a>");
						sb.append(
								"<li class=\"paginate_button page-item next\" id=\"simpletable_next\"><a href=\"javascript:"
										+ jsName + "(" + i
										+ ");\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-right\"></i></a></li>");

						// sb.append("<a class=\"btn_last\"
						// href=\"javascript:"+jsName+"("+pageNo+");\"><span></span></a>");
						sb.append(
								"<li class=\"paginate_button page-item last\" id=\"m_table_1_last\"><a href=\"javascript:"
										+ jsName + "(" + pageNo
										+ ");\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-double-right\"></i></a></li>");

					}

				}

			}

			// 마지막 페이지 처리

			else {

				int x = (cPage / 10) * 10 + 1;

				int i;

				// Case4

				if (pageNo - x <= 10) {

					// sb.append("<a class=\"btn_prev\"
					// href=\"javascript:"+jsName+"("+(x-10)+");\"><span></span></a>");
					sb.append("<li class=\"paginate_button page-item previous \" id=\"simpletable_previous\">1<a href=\"javascript:"
									+ jsName + "(" + (x - 10)
									+ ");\" tabindex=\"0\" class=\"page-link\"><i class=\"icofont icofont-thin-left\"></i></a></li>");

					for (i = x; i <= x + (pageNo - x); i++) {

						if (cPage == i) {

							// sb.append("["+i+"]");

							// sb.append("<a class=\"on\" href=\"javascript:"+jsName+"("+i+");\">"+ i
							// +"</a>");
							sb.append("<li class=\"paginate_button page-item active\"><a href=\"javascript:" + jsName
									+ "(" + i + ");\" tabindex=\"0\" class=\"page-link\">" + i + "</a></li>");
						} else {

							// sb.append("<a href=\"javascript:"+jsName+"("+i+");\">"+ i +"</a>");
							sb.append("<li class=\"paginate_button page-item\"><a href=\"javascript:" + jsName + "(" + i
									+ ");\" tabindex=\"0\" class=\"page-link\">" + i + "</a></li>");

						}

					}

				}

			}

		}
		sb.append("</ul></div>");

		return sb.toString();

	}

}
