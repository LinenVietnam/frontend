function EmailBlock(props) {
  const { item } = props;

  return (
    <tr className="bg-white px-5 py-10 mb-10 align-middle">
      <td className="text-left font-sans w-[15%]">{item.id}</td>
      <td className="text-left font-sans ">{item.emailOfUser}</td>
    </tr>
  );
}
export default EmailBlock;
