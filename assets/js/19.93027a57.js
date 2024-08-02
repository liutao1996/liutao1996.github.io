(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{524:function(s,t,e){"use strict";e.r(t);var n=e(6),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-resultset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-resultset"}},[s._v("#")]),s._v(" 1. ResultSet")]),s._v(" "),e("ul",[e("li",[s._v("JDBC 使用 ResultSet 来封装 SQL 的查询结果，可以将 ResultSet 类比为数据库表的查询结果。")]),s._v(" "),e("li",[s._v("它拥有如下两个性质：\n"),e("ul",[e("li",[s._v("可滚动。")]),s._v(" "),e("li",[s._v("可更新。")])])]),s._v(" "),e("li",[s._v("这两个性质，是在创建 Statement 的时候决定的。")]),s._v(" "),e("li",[s._v("一般来说，我们使用以下 Connection 的方法创建 Statement：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("      Statement createStatement() throws SQLException;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("但实际上，Connection 还提供以下方法：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("      Statement createStatement(int resultSetType, int resultSetConcurrency) throws SQLException;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_1-1-可滚动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-可滚动"}},[s._v("#")]),s._v(" 1.1 可滚动")]),s._v(" "),e("ul",[e("li",[s._v("ResultSet 通过移动指针来取出结果集的内容。")]),s._v(" "),e("li",[s._v("以下方法的第一个参数，用来控制 ResultSet 的指针移动策略。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Statement createStatement(int resultSetType, int resultSetConcurrency) throws SQLException;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("ResultSet 内部设置了3个常量值，来控制指针移动的策略：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("int TYPE_FORWARD_ONLY = 1003;\n\nint TYPE_SCROLL_INSENSITIVE = 1004;\n \nint TYPE_SCROLL_SENSITIVE = 1005;\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[s._v("TYPE_FORWARD_ONLY\n"),e("ul",[e("li",[s._v("顾名思义，ResultSet 的指针只允许向后滚动，即只支持 next() 方法（SQLite 只支持这种模式）。")])])]),s._v(" "),e("li",[s._v("TYPE_SCROLL_INSENSITIVE 和 TYPE_SCROLL_SENSITIVE\n"),e("ul",[e("li",[s._v("这两个方法都能够实现任意的前后滚动，使用各种移动的 ResultSet 指针的方法，区别在于两者对于修改数据的敏感性。")]),s._v(" "),e("li",[s._v("TYPE_SCROLL_SENSITIVE 仅针对已经取出来的记录的更改（update、delete）敏感，对新增（insert）的数据不敏感，部分数据库驱动，这两个常量没有太大区别")])])]),s._v(" "),e("li",[s._v("ResultSet 提供了以下8个接口，来支持它可滚动的特性：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 向后滚动\nboolean next() throws SQLException;\n \n// 向前滚动\nboolean previous() throws SQLException;\n \n// 移动到相对当前行的第几行\nboolean relative( int rows ) throws SQLException;\n \n// 移动到整个 ResultSet 中的第几行\nboolean absolute( int row ) throws SQLException;\n \n// 移动到第一行\nboolean first() throws SQLException;\n \n// 移动到最后一行\nboolean last() throws SQLException;\n \n// 移动到第一行的前一行（没有数据）\nvoid beforeFirst() throws SQLException;\n \n// 移动到最后一行的后一行（没有数据）\nvoid afterLast() throws SQLException;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("h3",{attrs:{id:"_1-2-可更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-可更新"}},[s._v("#")]),s._v(" 1.2 可更新")]),s._v(" "),e("ul",[e("li",[s._v("以下方法的第二个参数，用来控制 ResultSet 的并发类型：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Statement createStatement(int resultSetType, int resultSetConcurrency) throws SQLException;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("这个参数可以接收以下2个值：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  int CONCUR_READ_ONLY = 1007;\n   \n  int CONCUR_UPDATABLE = 1008;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("CONCUR_READ_ONLY 表示 ResultSet 是只读的并发模式（默认）。")]),s._v(" "),e("li",[s._v("CONCUR_UPDATABLE 表示 ResultSet 是可更新的并发模式。")]),s._v(" "),e("li",[s._v("一旦将并发模式设置成 CONCUR_UPDATABLE，那么 JDBC API 就提供了一系列的 updateXxx(int columnIndex, Xxx value) 方法去更新 ResultSet 的数据。")]),s._v(" "),e("li",[e("strong",[s._v("这些数据的 UPDATE，会直接反应到数据库中")])])]),s._v(" "),e("h3",{attrs:{id:"_1-3-demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-demo"}},[s._v("#")]),s._v(" 1.3 DEMO")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('package com.liutao.demo;\n \nimport com.liutao.entity.Student;\nimport com.liutao.util.Connector;\nimport com.liutao.util.DriverLoader;\n \nimport java.sql.Connection;\nimport java.sql.ResultSet;\nimport java.sql.SQLException;\nimport java.sql.Statement;\n \npublic final class ResultSetDemo {\n \n    public static void main(String[] args) {\n        String sql = "SELECT * from STUDENT";\n \n        DriverLoader.loadSqliteDriver();\n        try (Connection conn = Connector.getSqlConnection();\n             Statement stmt = conn.createStatement();\n             ResultSet rs = stmt.executeQuery(sql)) {\n \n            dealResultSet(rs);\n        } catch (SQLException e) {\n            e.printStackTrace();\n        }\n    }\n \n    private static void dealResultSet(ResultSet rs) throws SQLException {\n        while (rs.next()) {\n            int id = rs.getInt(1);\n            String name = rs.getString(2);\n            String password = rs.getString(3);\n            Student student = new Student(id, name, password);\n            System.out.println(student);\n        }\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br")])]),e("h2",{attrs:{id:"_2-resultsetmetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-resultsetmetadata"}},[s._v("#")]),s._v(" 2. ResultSetMetaData")]),s._v(" "),e("ul",[e("li",[s._v("ResultSet 提供了一个 getMetaData() 方法，用来获取 ResultSet 对应的 ResultSetMetaData 对象：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ResultSetMetaData getMetaData() throws SQLException;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("MetaData 即元数据，就是描述其他数据的数据。")]),s._v(" "),e("li",[s._v("ResultSetMetaData 封装了描述 ResultSet 对象的数据，内部提供了大量的方法来分析 ResultSet 的返回信息，其中最常用的有以下三个方法：\n"),e("ul",[e("li",[s._v("getColumnCount: 返回该 ResultSet 的列数量。")]),s._v(" "),e("li",[s._v("getColumnName: 返回指定索引的列名。")]),s._v(" "),e("li",[s._v("getColumnType: 返回指定索引的列类型。")])])]),s._v(" "),e("li",[s._v("虽然 ResultSetMetaData 对于分析查询结果有很大的便宜，但是它会消耗一定的系统开销，所以如果使用 ResultSet 就足以完成对查询结果的处理，就没有必要使用 ResultSetMetaData。")]),s._v(" "),e("li",[s._v("最后一点需要注意的是，无论是 ResultSet 还是 ResultSetMetaData，都是需要释放资源的。")]),s._v(" "),e("li",[s._v("换言之，对于查询结果的分析一定要在释放资源之前完成，所以以下代码的写法是错误的：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('package com.liutao.demo;\n \nimport com.liutao.constants.ErrorCode;\nimport com.liutao.exception.JdbcSampleException;\nimport com.liutao.util.Connector;\nimport com.liutao.util.DriverLoader;\n \nimport java.sql.Connection;\nimport java.sql.PreparedStatement;\nimport java.sql.ResultSet;\nimport java.sql.SQLException;\n \npublic final class TypicalWrongCase {\n \n    public static void main(String[] args) {\n        String sql = "SELECT * from STUDENT";\n        ResultSet resultSet = executeQuery(sql);\n        dealResultSet(resultSet);\n    }\n \n    public static ResultSet executeQuery(String sql) {\n        DriverLoader.loadSqliteDriver();\n        try (Connection conn = Connector.getSqlConnection();\n             PreparedStatement pstmt = conn.prepareStatement(sql);\n             ResultSet rs = pstmt.executeQuery()) {\n            return rs;\n        } catch (SQLException e) {\n            String msg = "Fail to execute QUERY using prepared statement.";\n            throw new JdbcSampleException(ErrorCode.EXECUTE_QUERY_FAILURE, msg);\n        }\n    }\n \n    private static void dealResultSet(ResultSet rs) {\n        // do something with ResultSet\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);